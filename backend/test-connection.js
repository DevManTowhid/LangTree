// backend/test-connection.js
const { db } = require('./config/firebase-config');

async function checkDatabaseConnection() {
    try {
        console.log("⏳ Attempting to talk to Firestore...");

        // 1. We try to write a tiny test document to a collection called 'system_tests'
        const testRef = db.collection('system_tests').doc('connection_ping');
        
        await testRef.set({
            status: "Connected successfully!",
            timestamp: new Date().toISOString(),
            message: "If you are reading this in the Firebase Console, your backend is working perfectly."
        });

        console.log("🟢 SUCCESS! Your backend is officially connected to Firestore.");
        console.log("👉 Go check your Firebase Console. You should see a 'system_tests' collection.");
        
        process.exit(0); // Exit successfully
    } catch (error) {
        console.error("🔴 FAILED TO CONNECT! The SDK loaded, but it cannot access the database.");
        console.error("Error Details:", error.message);
        
        // Common reasons for failure:
        // 1. The service account JSON belongs to the wrong project.
        // 2. Your network is blocking the connection.
        // 3. The Firebase project has been deleted or disabled.
        
        process.exit(1); // Exit with error
    }
}

// Run the function
checkDatabaseConnection();