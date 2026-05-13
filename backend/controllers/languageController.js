// // controllers/languageController.js
// const { db } = require('../config/firebase-config');
import {db} from "../config/firebase-config.js"
const getLanguage = async (req, res) => {
  try {
    const slug = req.params.slug;
    console.log(`\n🔍 Fetching: ${slug}`);

    const docRef = db.collection('languages').doc(slug);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    // 1. Get the base data
    let languageData = docSnap.data();
    let ancestryChain = [];
    
    // 2. Start the Recursive Walk
    // We look at the immediate_parent of the CURRENT language first
    let parentPointer = languageData.immediate_parent;

    console.log(`🪜 Starting climb from parent: ${parentPointer?.name || 'None'}`);

    while (parentPointer && parentPointer.ref_id) {
      // Fetch the parent document from Firestore
      const parentSnap = await db.collection('languages').doc(parentPointer.ref_id).get();
      
      if (parentSnap.exists) {
        const parentData = parentSnap.data();
        
        // Add to the START of the array so it goes [Root -> Parent -> Child]
        ancestryChain.unshift({
          ref_id: parentPointer.ref_id,
          name: parentData.name
        });

        console.log(`✅ Found Ancestor: ${parentData.name}`);

        // Move the pointer up to the grandparent
        parentPointer = parentData.immediate_parent;
      } else {
        console.log(`⚠️ Parent ref '${parentPointer.ref_id}' exists in data but document is missing in Firestore.`);
        break; 
      }
    }

    // 3. Attach the finished chain
    languageData.ancestry = ancestryChain;
    console.log(`🏁 Chain complete. Total ancestors: ${ancestryChain.length}`);

    return res.status(200).json({
      success: true,
      data: languageData
    });

  } catch (error) {
    console.error(`❌ Controller Error:`, error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { getLanguage };