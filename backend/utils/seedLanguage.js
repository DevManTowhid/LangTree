// utils/seedLanguages.js
import { db } from '../config/firebase-config.js'; // Adjust the path as needed

import languageData from './seed_Data.js'; // This should be an array of language objects with 'slug', 'name', and 'immediate_parent'

// 2. The Auto-Calculator Function
function calculateAncestry(currentLang, allLangs) {
  const ancestry = [];
  let parentPointer = currentLang.immediate_parent;

  // Walk up the local array in-memory
  while (parentPointer) {
    const parent = allLangs.find(l => l.slug === parentPointer.ref_id);
    if (parent) {
      ancestry.unshift({
        ref_id: parent.slug,
        name: parent.name
      });
      parentPointer = parent.immediate_parent;
    } else {
      parentPointer = null;
    }
  }
  return ancestry;
}

// 3. Execution Function
const seedDatabase = async () => {
  const batch = db.batch();

  console.log("🚀 Pre-calculating ancestry chains...");

  languageData.forEach((lang) => {
    // Automatically calculate the chain
    const fullAncestry = calculateAncestry(lang, languageData);
    
    // Merge the calculated ancestry into the object
    const finalDoc = {
      ...lang,
      ancestry: fullAncestry
    };

    const docRef = db.collection('languages').doc(lang.slug);
    batch.set(docRef, finalDoc);
    console.log(`✅ Prepared: ${lang.name} (${fullAncestry.length} ancestors)`);
  });

  await batch.commit();
  console.log("🏁 Database seeded successfully with pre-calculated chains!");
};

seedDatabase();