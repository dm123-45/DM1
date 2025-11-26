# 🚀 Quick Start Guide

Follow these steps to get your After School Program application running:

## Step 1: Start MongoDB

**Windows (Command Prompt as Administrator):**
```cmd
net start MongoDB
```

**Mac:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongodb
```

**Verify MongoDB is running:**
```bash
# Should connect without errors
mongosh
# Then type: exit
```

---

## Step 2: Install Backend Dependencies

Open a terminal in the project root and run:

```bash
cd express-backend
npm install
```

---

## Step 3: Start the Backend Server

In the same terminal (still in express-backend directory):

```bash
npm run dev
```

You should see:
```
✅ Connected to local MongoDB
🚀 Server running on http://localhost:3000
📚 Lessons API: http://localhost:3000/lessons
🔍 Search API: http://localhost:3000/search
🛒 Checkout API: http://localhost:3000/checkout
📦 Orders API: http://localhost:3000/orders
🌱 Seed API: http://localhost:3000/seed
```

**Keep this terminal open!** The server needs to stay running.

---

## Step 4: Seed the Database

Open a **NEW terminal** and run:

**Using curl (Windows/Mac/Linux):**
```bash
curl -X POST http://localhost:3000/seed
```

**Or open in browser:**
```
http://localhost:3000/seed
```

You should see:
```json
{
  "message": "Database seeded successfully",
  "count": 10
}
```

---

## Step 5: Open the Frontend

**Windows:**
```cmd
start frontend/index3.html
```

**Mac:**
```bash
open frontend/index3.html
```

**Linux:**
```bash
xdg-open frontend/index3.html
```

**Or manually:** Double-click `frontend/index3.html` in File Explorer/Finder

---

## Step 6: Test the Application

1. **Login Page:**
   - Click "Quick fill" button OR
   - Enter Name: `Tanya Murombe`
   - Enter Student ID: `M00001234`
   - Click "Enter"

2. **Browse Lessons:**
   - You should see 10 lessons displayed
   - Try searching for "Math" or "Science"
   - Try filtering by subject
   - Try sorting by price or spaces

3. **Add to Cart:**
   - Click "Add" on any lesson
   - Check the cart panel on the right
   - Try increasing/decreasing quantities

4. **Checkout:**
   - Click "Open Cart"
   - Fill in the checkout form:
     - First Name: John
     - Last Name: Doe
     - Phone: 1234567890
     - Payment: Card
     - Card Number: 1234567890123456
     - Expiry: 12/25
     - CVV: 123
   - Click "Pay & Submit"
   - You should see a receipt modal

5. **Order History:**
   - Click "Order history" button
   - You should see your completed order

---

## 🎉 Success!

If everything works, you now have a fully connected full-stack application!

---

## ❌ Troubleshooting

### MongoDB Not Starting?

**Check if MongoDB is installed:**
```bash
mongod --version
```

**If not installed, install it:**
- Windows: https://www.mongodb.com/try/download/community
- Mac: `brew install mongodb-community`
- Linux: `sudo apt-get install mongodb`

### Backend Won't Start?

**Check if port 3000 is already in use:**
```bash
# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -i :3000
```

**Kill the process if needed:**
```bash
# Windows (replace <PID> with actual process ID)
taskkill /PID <PID> /F

# Mac/Linux
kill -9 <PID>
```

### Lessons Not Loading?

1. Check browser console (F12) for errors
2. Verify backend is running on http://localhost:3000
3. Make sure you seeded the database
4. Try accessing http://localhost:3000/lessons directly in browser

### Still Having Issues?

Check the detailed README.md file for more troubleshooting steps!

---

## 📝 Quick Reference

**Backend URL:** http://localhost:3000
**Frontend File:** frontend/index3.html
**Test Student ID:** M00001234

**API Endpoints:**
- GET /lessons - Get all lessons
- GET /search?q=query - Search lessons
- POST /checkout - Create order
- GET /orders?studentId=M00001234 - Get orders
- POST /seed - Seed database

---

**Need help?** Check README.md for detailed documentation!
