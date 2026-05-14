// controllers/languageController.js
import { db } from '../config/firebase-config.js'; // Ensure the .js extension is there!

export const getLanguage = async (req, res) => {
  try {
    const slug = req.params.slug;
    console.log(`\n⚡ Fast Fetching: ${slug}`);

    // ONE single read to Firestore. No loops. No climbing.
    const docSnap = await db.collection('languages').doc(slug).get();

    if (!docSnap.exists) {
      console.log(`❌ Not found: ${slug}`);
      return res.status(404).json({ success: false, message: "Not found" });
    }

    const languageData = docSnap.data();

    // The data already contains the 'ancestry' and 'children' arrays from the seeder!
    return res.status(200).json({
      success: true,
      data: languageData
    });

  } catch (error) {
    console.error(`❌ Controller Error:`, error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};