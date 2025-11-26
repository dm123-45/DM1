# After School Program - Full Stack Application

A complete full-stack web application for managing after-school lessons, built with Express.js, MongoDB, and Vue.js.

## 🏗️ Project Structure

```
FullStackCoursework/
├── express-backend/          # Backend API server
│   ├── server.js            # Main server file
│   ├── lessons.json         # Seed data for lessons
│   └── package.json         # Backend dependencies
├── frontend/                # Frontend application
│   ├── index3.html         # Main application (Vue 2 CDN)
│   └── src/                # Vue 3 + Vite project (alternative)
└── mongodb-exports/         # Database exports
```

## 🚀 Quick Start

### Prerequisites

1. **Node.js** (v14 or higher)
2. **MongoDB** (v4.4 or higher) - Must be running locally
3. A modern web browser

### Step 1: Install MongoDB

**Windows:**
```bash
# Download from: https://www.mongodb.com/try/download/community
# Or use Chocolatey:
choco install mongodb

# Start MongoDB service:
net start MongoDB
```

**Mac:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

### Step 2: Setup Backend

```bash
# Navigate to backend directory
cd express-backend

# Install dependencies
npm install

# Start the server
npm run dev
```

The backend server will start on **http://localhost:3000**

### Step 3: Seed the Database

Once the backend is running, seed the database with lesson data:

**Option 1: Using curl**
```bash
curl -X POST http://localhost:3000/seed
```

**Option 2: Using browser**
Open your browser and navigate to:
```
http://localhost:3000/seed
```

You should see a success message with the count of lessons added.

### Step 4: Open the Frontend

Simply open the HTML file in your browser:

**Windows:**
```bash
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

Or manually open `frontend/index3.html` in your browser.

## 📡 API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/lessons` | Get all lessons |
| GET | `/search?q=query` | Search lessons by subject, location, or teacher |
| POST | `/checkout` | Create a new order |
| GET | `/orders?studentId=M00001234` | Get orders for a specific student |
| PUT | `/lessons/:id` | Update lesson spaces |
| POST | `/seed` | Seed database with initial data |

### Example API Calls

**Get all lessons:**
```bash
curl http://localhost:3000/lessons
```

**Search lessons:**
```bash
curl http://localhost:3000/search?q=math
```

**Create an order:**
```bash
curl -X POST http://localhost:3000/checkout \
  -H "Content-Type: application/json" \
  -d '{
    "studentName": "John Doe",
    "studentId": "M00001234",
    "items": [{"id": "1", "subject": "Math", "qty": 1, "price": 25}],
    "total": 25
  }'
```

## 🎨 Frontend Features

- **Student Login**: Secure login with Student ID validation (format: M########)
- **Lesson Browsing**: View all available lessons with filtering and sorting
- **Search**: Real-time search across subjects, locations, and teachers
- **Shopping Cart**: Add/remove lessons, adjust quantities
- **Checkout**: Complete order with student information
- **Order History**: View past orders
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes
- **Grid/List View**: Switch between layout modes

### Test Credentials

Use the "Quick fill" button or enter:
- **Name**: Tanya Murombe
- **Student ID**: M00001234

## 🗄️ Database Schema

### Lessons Collection
```javascript
{
  "_id": ObjectId,
  "subject": String,
  "location": String,
  "price": Number,
  "spaces": Number,
  "teacher": String,
  "room": String,
  "description": String,
  "thumb": String (URL)
}
```

### Orders Collection
```javascript
{
  "_id": ObjectId,
  "studentName": String,
  "studentId": String,
  "firstName": String,
  "lastName": String,
  "phone": String,
  "email": String,
  "payment": String,
  "items": Array,
  "total": Number,
  "createdAt": String (ISO date)
}
```

## 🛠️ Troubleshooting

### MongoDB Connection Issues

**Error: "MongoServerError: connect ECONNREFUSED"**

Solution: Make sure MongoDB is running
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongodb
```

### Port Already in Use

**Error: "EADDRINUSE: address already in use :::3000"**

Solution: Kill the process using port 3000
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### CORS Issues

If you see CORS errors in the browser console, ensure:
1. Backend server is running on port 3000
2. CORS is enabled in server.js (already configured)
3. Frontend is accessing the correct URL

### Lessons Not Loading

1. Check if MongoDB is running
2. Verify backend server is running on port 3000
3. Seed the database using `/seed` endpoint
4. Check browser console for errors
5. Verify API endpoint in frontend matches backend

## 📦 Dependencies

### Backend
- **express**: Web framework
- **cors**: Enable CORS
- **mongodb**: MongoDB driver
- **dotenv**: Environment variables
- **nodemon**: Development auto-reload

### Frontend
- **Vue 2**: JavaScript framework (CDN)
- **Font Awesome**: Icons
- **Inter Font**: Typography

## 🔧 Development

### Backend Development
```bash
cd express-backend
npm run dev  # Starts with nodemon for auto-reload
```

### View Logs
The backend logs all requests and database operations to the console.

### Testing with Postman
Import the collection from `postman-collection/coursework_collection.json` to test all API endpoints.

## 📝 Environment Variables

Create a `.env` file in the `express-backend` directory (optional):

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017
DB_NAME=afterschoolDB
```

## 🚢 Deployment

### Backend Deployment (Render/Heroku)
1. Update MongoDB URI to use cloud database (MongoDB Atlas)
2. Set environment variables
3. Deploy backend code

### Frontend Deployment
1. Host `index3.html` on any static hosting service
2. Update `BACKEND_BASE` constant in the HTML file to point to deployed backend

## 📄 License

This project is for educational purposes.

## 👥 Contributors

- Full Stack Development Team

## 🆘 Support

For issues or questions:
1. Check the troubleshooting section
2. Review browser console for errors
3. Check backend server logs
4. Verify MongoDB is running and accessible

---

**Happy Coding! 🎉**
