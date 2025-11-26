// Test script to verify backend connection and database
const http = require('http');

const BACKEND_URL = 'http://localhost:3000';

console.log('🧪 Testing Backend Connection...\n');

// Test 1: Check if server is running
function testServerRunning() {
  return new Promise((resolve, reject) => {
    console.log('1️⃣  Testing if server is running...');
    http.get(BACKEND_URL, (res) => {
      if (res.statusCode === 200) {
        console.log('   ✅ Server is running on port 3000\n');
        resolve(true);
      } else {
        console.log(`   ❌ Server responded with status: ${res.statusCode}\n`);
        reject(false);
      }
    }).on('error', (err) => {
      console.log('   ❌ Server is not running!');
      console.log('   💡 Start it with: cd express-backend && npm run dev\n');
      reject(false);
    });
  });
}

// Test 2: Check lessons endpoint
function testLessonsEndpoint() {
  return new Promise((resolve, reject) => {
    console.log('2️⃣  Testing /lessons endpoint...');
    http.get(BACKEND_URL + '/lessons', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const lessons = JSON.parse(data);
          if (Array.isArray(lessons) && lessons.length > 0) {
            console.log(`   ✅ Lessons endpoint working! Found ${lessons.length} lessons\n`);
            resolve(true);
          } else {
            console.log('   ⚠️  Lessons endpoint returned empty array');
            console.log('   💡 Seed the database: POST to http://localhost:3000/seed\n');
            resolve(false);
          }
        } catch (err) {
          console.log('   ❌ Invalid JSON response\n');
          reject(false);
        }
      });
    }).on('error', (err) => {
      console.log('   ❌ Failed to connect to /lessons endpoint\n');
      reject(false);
    });
  });
}

// Test 3: Check if MongoDB is connected
function testMongoConnection() {
  return new Promise((resolve) => {
    console.log('3️⃣  Testing MongoDB connection...');
    // If lessons endpoint works, MongoDB is connected
    console.log('   ✅ MongoDB appears to be connected (lessons endpoint works)\n');
    resolve(true);
  });
}

// Run all tests
async function runTests() {
  try {
    await testServerRunning();
    const lessonsWorking = await testLessonsEndpoint();
    
    if (lessonsWorking) {
      await testMongoConnection();
      console.log('═══════════════════════════════════════════════════');
      console.log('🎉 ALL TESTS PASSED!');
      console.log('═══════════════════════════════════════════════════');
      console.log('\n📋 Next Steps:');
      console.log('   1. Open frontend/index3.html in your browser');
      console.log('   2. Login with Student ID: M00001234');
      console.log('   3. Browse and add lessons to cart');
      console.log('   4. Complete checkout\n');
    } else {
      console.log('═══════════════════════════════════════════════════');
      console.log('⚠️  TESTS COMPLETED WITH WARNINGS');
      console.log('═══════════════════════════════════════════════════');
      console.log('\n📋 Action Required:');
      console.log('   Seed the database by running:');
      console.log('   curl -X POST http://localhost:3000/seed\n');
    }
  } catch (err) {
    console.log('═══════════════════════════════════════════════════');
    console.log('❌ TESTS FAILED');
    console.log('═══════════════════════════════════════════════════');
    console.log('\n📋 Troubleshooting:');
    console.log('   1. Make sure MongoDB is running');
    console.log('   2. Start backend: cd express-backend && npm run dev');
    console.log('   3. Check for errors in the backend console\n');
  }
}

runTests();
