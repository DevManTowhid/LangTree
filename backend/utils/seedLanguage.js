// utils/seedLanguages.js
const { db } = require('../config/firebase-config');

const languageData = [
  {
    slug: "indo-european",
    name: "Indo-European",
    immediate_parent: null,
    details: "The Indo-European languages are a language family native to the northern Indian subcontinent, most of Europe, and the Iranian plateau. Today, over 3.4 billion people (42% of the global population) speak an Indo-European language as a first language.",
    children: [
      { ref_id: "indo-iranian", name: "Indo-Iranian" }
    ]
  },
  {
    slug: "indo-iranian",
    name: "Indo-Iranian",
    immediate_parent: { ref_id: "indo-european", name: "Indo-European" },
    details: "The largest and southeasternmost extant branch of the Indo-European language family, spoken primarily in the Indian subcontinent and Iranian plateau.",
    children: [
      { ref_id: "indo-aryan", name: "Indo-Aryan" }
    ]
  },
  {
    slug: "indo-aryan",
    name: "Indo-Aryan",
    immediate_parent: { ref_id: "indo-iranian", name: "Indo-Iranian" },
    details: "A major branch of the Indo-Iranian languages, natively spoken by the Indo-Aryan peoples of the Indian subcontinent.",
    children: [
      { ref_id: "eastern", name: "Eastern" }
    ]
  },
  {
    slug: "eastern",
    name: "Eastern",
    immediate_parent: { ref_id: "indo-aryan", name: "Indo-Aryan" },
    details: "The Eastern Indo-Aryan languages, also known as Magadhan languages, are spoken throughout the eastern Indian subcontinent, including Bihar, Jharkhand, Bengal, Assam, and Odisha.",
    children: [
      { ref_id: "bengali-assamese", name: "Bengali-Assamese" }
    ]
  },
  {
    slug: "bengali-assamese",
    name: "Bengali-Assamese",
    immediate_parent: { ref_id: "eastern", name: "Eastern" },
    details: "A grouping of the Eastern Indo-Aryan languages spoken in the easternmost parts of the Indian subcontinent.",
    children: [
      { ref_id: "bengali", name: "Bengali" }
    ]
  },
  {
    slug: "bengali",
    name: "Bengali",
    other_names: ["Bangla"],
    immediate_parent: { ref_id: "bengali-assamese", name: "Bengali-Assamese" },
    details: "Bengali is a classical Indo-Aryan language belonging to the Indo-Iranian branch. It is primarily spoken by the Bengali people, native to the Bengal region. With over 242 million native speakers, it is the sixth most spoken native language in the world.",
    metadata: {
      native_speakers: "241.8 million",
      total_speakers: "284.3 million",
      iso_codes: ["bn", "ben"],
      script: "Bengali–Assamese script",
      status: "Living"
    },
    children: [] // Leaf node for this branch
  }
];

async function seedDatabase() {
  try {
    console.log("⏳ Starting database seeding...");

    // Create a new Firestore batch (can hold up to 500 operations)
    const batch = db.batch();

    languageData.forEach((lang) => {
      // 1. Point to the 'languages' collection
      // 2. Set the document ID explicitly to the 'slug'
      const docRef = db.collection('languages').doc(lang.slug);

      // Add the set operation to the batch queue
      batch.set(docRef, lang);
    });

    // Fire all operations to the database simultaneously
    await batch.commit();
    
    console.log(`🟢 SUCCESS! Seeded ${languageData.length} language documents into Firestore.`);
    
    // Exit the terminal process successfully
    process.exit(0); 

  } catch (error) {
    console.error("🔴 Error seeding database:", error);
    process.exit(1);
  }
}

// Execute the seeder
seedDatabase();