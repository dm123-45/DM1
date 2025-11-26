# After School Program - Backend API

Express.js REST API for the After School Lesson Booking System with MongoDB.

## 🚀 Live API

**Deployed URL**: [Add your Render.com/AWS URL here]

Example: `https://your-app.onrender.com/lessons`

## 📋 Features

- RESTful API with Express.js
- MongoDB database integration
- CORS enabled for frontend communication
- Request logging middleware
- Static file serving for images
- Comprehensive error handling

## 🛠️ Technologies

- Node.js
- Express.js
- MongoDB (Native Driver)
- CORS
- dotenv

## 📦 Installation

```bash
# Install dependencies
npm install

# Create .env file (optional)
# Add: MONGODB_URI=your_mongodb_connection_string

# Start development server
npm run dev

# Start production server
npm start
```

## 🔗 API Endpoints

### Lessons

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/lessons` | Get all lessons |
| PUT | `/lessons/:id` | Update lesson spaces |

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/checkout` | Create new order |
| GET | `/orders?studentId=M12345678` | Get orders by student ID |

### Search

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/search?q=query` | Search lessons |

### Utility

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/seed` | Seed database with initial data |
| GET | `/` | Health check |

## 📝 API Examples

### Get All Lessons
```bash
curl http://localhost:3000/lessons
```

### Create Order
```bash
curl -X POST http://localhost:3000/checkout \
  -H "Content-Type: application/json" \
  -d '{
    "studentName": "John Doe",
    "studentId": "M12345678",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "1234567890",
    "email": "john@example.com",
    "payment": "card",
    "items": [
      {"id": 1, "subject": "Math", "qty": 2, "price": 25}
    ],
    "total": 50
  }'
```

### Update Lesson Spaces
```bash
curl -X PUT http://localhost:3000/lessons/1 \
  -H "Content-Type: application/json" \
  -d '{"spaces": 3}'
```

### Search Lessons
```bash
curl http://localhost:3000/search?q=math
```

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
  "thumb": String
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
  "createdAt": String
}
```

## 🔧 Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017
DB_NAME=afterschoolDB
```

For MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=afterschoolDB
```

## 🧪 Testing

### Using Postman
Import the collection from `../postman-collection/coursework_collection.json`

### Using curl
See API Examples section above

## 🚢 Deployment

### Render.com
1. Create new Web Service
2. Connect GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables (MONGODB_URI)
6. Deploy

### AWS Lambda
1. Package application
2. Create Lambda function
3. Configure API Gateway
4. Set environment variables
5. Deploy

## 📊 Middleware

### Logger Middleware
Logs all incoming requests:
```
[2024-01-15 10:30:00] GET /lessons
[2024-01-15 10:30:05] POST /checkout
```

### Static File Middleware
Serves images from `/images` directory

### CORS Middleware
Enables cross-origin requests from frontend

## 🔒 Security

- Input validation on all endpoints
- MongoDB injection prevention
- CORS configuration
- Error handling without exposing internals

## 📝 Notes

- Server runs on port 3000 by default
- MongoDB must be running locally or use Atlas
- Seed database before first use: `POST /seed`
- All responses are in JSON format

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run with auto-reload
npm run dev

# Run tests (if available)
npm test
```

## 📄 File Structure

```
express-backend/
├── server.js           # Main server file
├── lessons.json        # Seed data
├── package.json        # Dependencies
├── .env               # Environment variables (create this)
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongodb
```

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

## 👥 Author

Full Stack Development Coursework - CST3144

## 📄 License

Educational project for coursework submission.
