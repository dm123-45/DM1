// server.js
const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// -----------------------------
// DATABASE CONNECTION (LOCAL)
// -----------------------------
const uri = "mongodb://localhost:27017/?directConnection=true";
const client = new MongoClient(uri);
let db, lessonsCollection, ordersCollection;

// CONNECT TO DATABASE
async function connectDB() {
  try {
    await client.connect();
    db = client.db("afterschoolDB");
    lessonsCollection = db.collection("lessons");
    ordersCollection = db.collection("orders");
    console.log("✅ Connected to local MongoDB");
  } catch (err) {
    console.error("❌ DB Connection Error:", err);
  }
}
connectDB();

// -----------------------------
// MIDDLEWARE - LOGGER
// -----------------------------
app.use((req, res, next) => {
  console.log(`📢 ${req.method} ${req.url}`);
  next();
});

// -----------------------------
// MIDDLEWARE - STATIC IMAGES
// -----------------------------
app.use('/images', express.static('images'));

// -----------------------------
// API ROUTES
// -----------------------------

// GET ALL LESSONS
app.get('/lessons', async (req, res) => {
  try {
    const lessons = await lessonsCollection.find().toArray();
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ message: "Error fetching lessons" });
  }
});

// SEARCH LESSONS
app.get('/search', async (req, res) => {
  const q = req.query.q;

  if (!q) return res.json([]);

  try {
    const results = await lessonsCollection.find({
      $or: [
        { subject: { $regex: q, $options: "i" } },
        { location: { $regex: q, $options: "i" } },
        { price: { $regex: q, $options: "i" } },
      ]
    }).toArray();

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: "Search failed" });
  }
});

// POST ORDER (CHECKOUT)
app.post('/checkout', async (req, res) => {
  try {
    const orderData = req.body;
    const result = await ordersCollection.insertOne(orderData);
    res.json({ 
      message: "Order saved successfully",
      orderId: result.insertedId.toString(),
      id: result.insertedId.toString()
    });
  } catch (err) {
    res.status(500).json({ message: "Error saving order" });
  }
});

// GET ORDERS BY STUDENT ID
app.get('/orders', async (req, res) => {
  const studentId = req.query.studentId;
  
  if (!studentId) {
    return res.status(400).json({ message: "Student ID required" });
  }

  try {
    const orders = await ordersCollection.find({ studentId: studentId }).toArray();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" });
  }
});

// UPDATE LESSON SPACE
app.put('/lessons/:id', async (req, res) => {
  const id = req.params.id;
  const newValue = req.body.spaces;

  try {
    await lessonsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { spaces: newValue } }
    );
    res.json({ message: "Lesson updated" });
  } catch (err) {
    res.status(500).json({ message: "Error updating lesson" });
  }
});

// SEED DATABASE
app.post('/seed', async (req, res) => {
  try {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(__dirname, 'lessons.json');
    
    if (!fs.existsSync(dataPath)) {
      return res.status(404).json({ message: "lessons.json file not found" });
    }
    
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    await lessonsCollection.deleteMany({});
    await lessonsCollection.insertMany(data);
    res.json({ 
      message: "Database seeded successfully",
      count: data.length
    });
  } catch (err) {
    console.error("Seeding error:", err);
    res.status(500).json({ message: "Seeding failed: " + err.message });
  }
});

// HOME ROUTE
app.get('/', (req, res) => {
  res.send("Backend running (LOCAL DB) ✅");
});

// START SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 Lessons API: http://localhost:${PORT}/lessons`);
  console.log(`🔍 Search API: http://localhost:${PORT}/search`);
  console.log(`🛒 Checkout API: http://localhost:${PORT}/checkout`);
  console.log(`📦 Orders API: http://localhost:${PORT}/orders`);
  console.log(`🌱 Seed API: http://localhost:${PORT}/seed`);
});
