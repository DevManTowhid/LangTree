// controllers/languageController.js
const { db } = require('../config/firebase-config');

const getLanguage = async (req, res) => {
  try {
    // 1. Extract the slug from the URL (e.g., "bengali" or "indo-european")
    const slug = req.params.slug;

    // 2. Point to that specific document in the 'languages' collection
    const docRef = db.collection('languages').doc(slug);
    const docSnap = await docRef.get();

    // 3. Handle the 404 Case (Document doesn't exist)
    // This is crucial for handling those "Soft Links" we discussed!
    if (!docSnap.exists) {
      return res.status(404).json({
        success: false,
        message: `The language '${slug}' does not exist in the database yet.`
      });
    }

    // 4. Return the data to the frontend
    return res.status(200).json({
      success: true,
      data: docSnap.data()
    });

  } catch (error) {
    console.error(`Error fetching document:`, error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

module.exports = { getLanguage };