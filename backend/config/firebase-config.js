import admin from "firebase-admin";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// 1. Initialize environment variables
dotenv.config();

// 2. Fix for __dirname in ES Modules (works perfectly on Windows/Linux)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let serviceAccount;

try {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    // Production: Parse from a string environment variable
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  } else {
    // Local Development: Read the JSON file directly
    const jsonPath = resolve(__dirname, "../firebase-service-account.json");
    serviceAccount = JSON.parse(readFileSync(jsonPath, "utf8"));
  }
} catch (error) {
  console.error("🔥 Error loading Firebase Service Account:", error.message);
  process.exit(1);
}

// 3. Initialize the Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  console.log("✅ Firebase Admin Initialized Successfully");
}

// 4. Export the database instance
const db = admin.firestore();
export { db };