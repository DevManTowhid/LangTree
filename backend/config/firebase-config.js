// config/firebase-config.js
const admin = require("firebase-admin");
const path = require("path");
require("dotenv").config(); // Ensure you have installed dotenv: npm install dotenv

// Option A: Using environment variables (Best Practice for Production)
// If you host this on Vercel, Heroku, or Render, you will paste the JSON string into your ENV variables.
let serviceAccount;

try {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    // Parse the JSON string from the environment variable
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  } else {
    // Option B: Using a local file (Best for Local Development)
    // Put your downloaded JSON file in the root of your backend folder
    serviceAccount = require(path.resolve(__dirname, "../firebase-service-account.json"));
  }
} catch (error) {
  console.error("🔥 Failed to load Firebase credentials. Check your .env file or firebase-service-account.json path.");
  process.exit(1);
}

// Initialize the Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  console.log("✅ Firebase Admin Initialized Successfully");
}

// Export the Firestore database instance so other files can use it
const db = admin.firestore();

module.exports = { admin, db };