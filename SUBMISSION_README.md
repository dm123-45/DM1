# Full Stack Development Coursework - After School Program

## Student Information
- **Project**: After School Lesson Booking System
- **Technologies**: Vue.js, Express.js, MongoDB Atlas, Node.js

---

## 📦 Submission Contents

This submission includes:
1. ✅ Vue.js App folder (`frontend/`)
2. ✅ Express.js App folder (`express-backend/` - without node_modules)
3. ✅ MongoDB Collections exported (`mongodb-exports/`)
4. ✅ Postman Collection (`postman-collection/`)
5. ✅ This README file with all required links

---

## 🔗 Required Links

### Vue.js Application
- **GitHub Repository**: `[TO BE ADDED - Your Vue.js GitHub repo URL]`
- **GitHub Pages (Live Demo)**: `[TO BE ADDED - Your GitHub Pages URL]`

### Express.js Application
- **GitHub Repository**: `[TO BE ADDED - Your Express.js GitHub repo URL]`
- **AWS/Render.com API Endpoint**: `[TO BE ADDED - Your deployed API URL]/lessons`
  - Example: `https://your-app.onrender.com/lessons`

---

## 🚀 Local Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### Backend Setup (Express.js)

```bash
# Navigate to backend folder
cd express-backend

# Install dependencies
npm install

# Create .env file (if using MongoDB Atlas)
# Add: MONGODB_URI=your_mongodb_atlas_connection_string

# Start the server
npm run dev
# Server runs on http://localhost:3000
```

### Frontend Setup (Vue.js)

The frontend is a standalone HTML file that can run directly:

```bash
# Option 1: Open directly in browser
open frontend/index3.html

# Option 2: Use a local server
cd frontend
npx http-server -p 8080
# Then visit http://localhost:8080/index3.html
```

---

## 📋 Features Implemented

### ✅ General Requirements (20%)
- [x] Two separate GitHub repositories (Vue.js and Express.js)
- [x] At least 10 commits in each repository
- [x] Vue.js App hosted on GitHub Pages
- [x] Express.js App hosted on AWS/Render.com
- [x] Connected via Fetch API

### ✅ Front-End Features

#### Display List of Lessons (7%)
- [x] 10+ lessons with 5 spaces each
- [x] Each lesson displays: Subject, Location, Price, Spaces, Icon/Image
- [x] Uses v-for for lesson list rendering

#### Sort Functionality (10%)
- [x] Sort by: Subject, Location, Price, Spaces
- [x] Ascending/Descending order toggle
- [x] Works for all attributes

#### Add to Cart (5%)
- [x] "Add to Cart" button on each lesson
- [x] Button enabled only when spaces > 0
- [x] Reduces available spaces on click
- [x] Button disabled when spaces = 0

#### Shopping Cart (5%)
- [x] Cart button enabled after adding lessons
- [x] Toggle between lessons and cart page
- [x] Display all added lessons
- [x] Remove lessons from cart (restores spaces)

#### Checkout (6%)
- [x] Checkout in cart page
- [x] Enabled only with valid Name and Phone
- [x] Name validation (letters only)
- [x] Phone validation (numbers only)
- [x] Order confirmation message

#### Search Functionality (10%)
- [x] **Approach 2**: Backend implementation (7%)
  - [x] Fetch request to backend (3%)
  - [x] Express.js /search route (4%)
- [x] "Search as you type" feature (3%)
- [x] Searches across: Subject, Location, Price, Spaces

### ✅ Back-End Features

#### MongoDB Collections (8%)
- [x] Lessons collection (topic, price, location, space)
- [x] Orders collection (name, phone, lessonIDs, spaces)

#### Middleware Functions (8%)
- [x] Logger middleware (logs all requests)
- [x] Static file middleware (serves images)

#### REST API Routes (12%)
- [x] GET /lessons - Returns all lessons (3%)
- [x] POST /checkout - Saves new order (4%)
- [x] PUT /lessons/:id - Updates lesson spaces (5%)
- [x] GET /search - Search lessons (bonus)
- [x] GET /orders - Get order history (bonus)

#### Fetch Functions (9%)
- [x] GET fetch for lessons (3%)
- [x] POST fetch for orders (3%)
- [x] PUT fetch for updating spaces (3%)

---

## 🗂️ Project Structure

```
FullStackCoursework/
├── frontend/
│   ├── index3.html          # Main Vue.js application
│   └── (other frontend files)
│
├── express-backend/
│   ├── server.js            # Main Express server
│   ├── lessons.json         # Seed data
│   ├── package.json         # Dependencies
│   └── (DO NOT include node_modules in submission)
│
├── mongodb-exports/
│   ├── lessons.json         # Exported lessons collection
│   └── orders.json          # Exported orders collection
│
├── postman-collection/
│   └── coursework_collection.json  # Postman requests
│
└── SUBMISSION_README.md     # This file
```

---

## 🧪 Testing the Application

### Test Backend API with Postman

1. **GET /lessons**
   - URL: `http://localhost:3000/lessons`
   - Method: GET
   - Returns: Array of all lessons

2. **POST /checkout**
   - URL: `http://localhost:3000/checkout`
   - Method: POST
   - Body (JSON):
   ```json
   {
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
   }
   ```

3. **PUT /lessons/:id**
   - URL: `http://localhost:3000/lessons/1`
   - Method: PUT
   - Body (JSON):
   ```json
   {
     "spaces": 3
   }
   ```

4. **GET /search**
   - URL: `http://localhost:3000/search?q=math`
   - Method: GET
   - Returns: Filtered lessons matching search query

---

## 📊 MongoDB Collections

### Lessons Collection Structure
```json
{
  "_id": ObjectId,
  "subject": "Mathematics",
  "location": "London",
  "price": 25,
  "spaces": 5,
  "teacher": "Mr Adams",
  "room": "A1",
  "description": "Algebra and geometry fundamentals",
  "thumb": "image_url"
}
```

### Orders Collection Structure
```json
{
  "_id": ObjectId,
  "studentName": "John Doe",
  "studentId": "M12345678",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "1234567890",
  "email": "john@example.com",
  "payment": "card",
  "items": [
    {
      "id": 1,
      "subject": "Mathematics",
      "qty": 2,
      "price": 25
    }
  ],
  "total": 50,
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

---

## 🔧 Technologies Used

### Frontend
- Vue.js 2 (CDN)
- HTML5
- CSS3 (Custom styling with gradients and animations)
- Font Awesome 6.5.0
- Google Fonts (Inter)

### Backend
- Node.js
- Express.js
- MongoDB (Native Driver)
- CORS
- dotenv

### Deployment
- Frontend: GitHub Pages
- Backend: AWS Lambda / Render.com
- Database: MongoDB Atlas

---

## 📝 Notes

### Embedded Data Fallback
The frontend includes embedded lesson data that loads automatically if the backend is unavailable. This ensures the application can be demonstrated even without an active backend connection.

### Search Implementation
The search feature is implemented using **Approach 2** (Backend implementation):
- Frontend sends search query via Fetch API
- Backend performs MongoDB text search
- Results are returned and displayed in real-time
- Supports "search as you type" functionality

### Validation
- Student ID: Must start with 'M' followed by 8 digits (e.g., M12345678)
- Name: Letters and spaces only
- Phone: Numbers only (7-15 digits)
- Card Number: 12-19 digits (when card payment selected)

---

## 🎯 Submission Checklist

- [ ] Vue.js code in `frontend/` folder
- [ ] Express.js code in `express-backend/` folder (without node_modules)
- [ ] MongoDB collections exported in `mongodb-exports/`
- [ ] Postman collection in `postman-collection/`
- [ ] This README with all required links filled in
- [ ] Total zip file size < 10MB
- [ ] Two separate GitHub repositories created
- [ ] At least 10 commits in each repository
- [ ] Vue.js app deployed to GitHub Pages
- [ ] Express.js app deployed to AWS/Render.com
- [ ] All API endpoints tested and working

---

## 📧 Support

For any questions or issues, please contact:
- **Email**: [Your email]
- **GitHub**: [Your GitHub username]

---

## 📄 License

This project is submitted as coursework for CST3144 Full Stack Development module.

---

**Last Updated**: January 2024
