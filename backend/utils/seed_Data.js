const languageData = [
  // ==========================================
  // INDO-EUROPEAN FAMILY
  // ==========================================
  {
    slug: "germanic",
    name: "Germanic",
    immediate_parent: { ref_id: "indo-european", name: "Indo-European" },
    details: "The Germanic languages are a branch of the Indo-European language family spoken natively by a population of around 515 million people mainly in Europe, North America, Oceania, and Southern Africa. The Proto-Germanic language is believed to have emerged in the Nordic Bronze Age of Scandinavia. The most spoken Germanic languages are English and German, followed by Dutch, and the Scandinavian languages.",
    children: [
      { ref_id: "west-germanic", name: "West Germanic" }
    ]
  },
  {
    slug: "west-germanic",
    name: "West Germanic",
    immediate_parent: { ref_id: "germanic", name: "Germanic" },
    details: "West Germanic is the largest of the three traditional branches of the Germanic family. It includes languages such as English, German, Dutch, Yiddish, Afrikaans, and Frisian. This branch emerged from the dialects spoken around the North Sea and Central Europe during the early centuries of the first millennium.",
    children: [
      { ref_id: "english", name: "English" }
    ]
  },
  {
    slug: "english",
    name: "English",
    immediate_parent: { ref_id: "west-germanic", name: "West Germanic" },
    details: "English is a West Germanic language of the Indo-European family, originally spoken by the inhabitants of early medieval England. It is named after the Angles, one of the ancient Germanic peoples that migrated to the island of Great Britain. Following the global influence of the British Empire and the United States, English has become the world's principal lingua franca. It features a highly diverse vocabulary with significant Latin and French influences due to the Norman Conquest.",
    metadata: {
      native_speakers: "373 million",
      total_speakers: "1.45 billion",
      iso_codes: ["en", "eng"],
      script: "Latin script",
      status: "Living"
    },
    children: []
  },
  {
    slug: "italic",
    name: "Italic",
    immediate_parent: { ref_id: "indo-european", name: "Indo-European" },
    details: "The Italic languages are a branch of the Indo-European language family whose earliest known members were spoken on the Italian Peninsula in the first millennium BC. The most important member by far is Latin, the language of ancient Rome, which evolved into the modern Romance languages.",
    children: [
      { ref_id: "romance", name: "Romance" }
    ]
  },
  {
    slug: "romance",
    name: "Romance",
    immediate_parent: { ref_id: "italic", name: "Italic" },
    details: "The Romance languages (also called Latin languages) are the modern languages that evolved from Vulgar Latin between the third and eighth centuries. They are a subgroup of the Italic branch of the Indo-European language family. The major Romance languages—Spanish, Portuguese, French, Italian, and Romanian—have hundreds of millions of native speakers across the globe, primarily in Europe, the Americas, and parts of Africa.",
    children: [
      { ref_id: "spanish", name: "Spanish" }
    ]
  },
  {
    slug: "spanish",
    name: "Spanish",
    immediate_parent: { ref_id: "romance", name: "Romance" },
    details: "Spanish, also known as Castilian, is a Romance language that originated in the Castile region of Spain. It is the world's second-most spoken native language after Mandarin Chinese, and the world's fourth-most spoken language overall. It is the primary language of 20 countries and is one of the six official languages of the United Nations.",
    metadata: {
      native_speakers: "485 million",
      total_speakers: "559 million",
      iso_codes: ["es", "spa"],
      script: "Latin script",
      status: "Living"
    },
    children: []
  },

  // ==========================================
  // SINO-TIBETAN FAMILY
  // ==========================================
  {
    slug: "sino-tibetan",
    name: "Sino-Tibetan",
    immediate_parent: null,
    details: "The Sino-Tibetan languages are a family of more than 400 languages, second only to Indo-European in number of native speakers. The vast majority of these are the 1.3 billion native speakers of the Sinitic languages (Chinese). Other branches include the Tibeto-Burman languages, spoken in the Himalayas and Southeast Asia. The family is characterized by a high degree of diversity and tonal systems in many of its branches.",
    metadata: {
      total_speakers: "1.4 billion",
      living_languages_count: 450,
      homeland: "Yellow River basin, North China",
      status: "Living"
    },
    children: [
      { ref_id: "sinitic", name: "Sinitic" }
    ]
  },
  {
    slug: "sinitic",
    name: "Sinitic",
    immediate_parent: { ref_id: "sino-tibetan", name: "Sino-Tibetan" },
    details: "The Sinitic languages, often collectively referred to as the Chinese language, form the primary branch of the Sino-Tibetan family. They are characterized by their tonal nature and logographic writing system (Chinese characters). The branch consists of several varieties, including Mandarin, Wu, Yue (Cantonese), and Min.",
    children: [
      { ref_id: "mandarin-chinese", name: "Mandarin Chinese" }
    ]
  },
  {
    slug: "mandarin-chinese",
    name: "Mandarin Chinese",
    immediate_parent: { ref_id: "sinitic", name: "Sinitic" },
    details: "Mandarin is a group of Sinitic dialects spoken across most of northern and southwestern China. Because Mandarin includes the Beijing dialect, which is the basis for Standard Chinese, it is the most widely spoken language in the world by native speakers. It is a tonal language with four main tones and is written using both Simplified and Traditional Chinese characters.",
    metadata: {
      native_speakers: "940 million",
      total_speakers: "1.1 billion",
      iso_codes: ["zh", "zho"],
      script: "Chinese characters (Simplified & Traditional)",
      status: "Living"
    },
    children: []
  },

  // ==========================================
  // AFROASIATIC FAMILY
  // ==========================================
  {
    slug: "afroasiatic",
    name: "Afroasiatic",
    immediate_parent: null,
    details: "The Afroasiatic languages are a large language family with about 300 languages spoken predominantly in West Asia, North Africa, the Horn of Africa, and parts of the Sahel. It is one of the world's oldest documented language families, with a written history stretching back over 5,000 years to Ancient Egyptian. Major branches include Semitic, Cushitic, Berber, and Chadic.",
    metadata: {
      total_speakers: "500 million",
      living_languages_count: 375,
      homeland: "Northeast Africa or the Levant",
      status: "Living"
    },
    children: [
      { ref_id: "semitic", name: "Semitic" }
    ]
  },
  {
    slug: "semitic",
    name: "Semitic",
    immediate_parent: { ref_id: "afroasiatic", name: "Afroasiatic" },
    details: "The Semitic languages are a branch of the Afroasiatic language family that originated in the Middle East. They are unique for their non-concatenative morphology, based on triliteral roots. This branch includes Arabic, Amharic, Hebrew, and Tigrinya, as well as many extinct languages such as Akkadian and Phoenician.",
    children: [
      { ref_id: "arabic", name: "Arabic" }
    ]
  },
  {
    slug: "arabic",
    name: "Arabic",
    immediate_parent: { ref_id: "semitic", name: "Semitic" },
    details: "Arabic is a Central Semitic language that first emerged in the Iron Age in northwestern Arabia. It is named after the Arabs, a term initially used to describe peoples living from Mesopotamia in the east to the Anti-Lebanon mountains in the west. Arabic is the liturgical language of Islam and is one of the six official languages of the UN. Modern Standard Arabic is used for formal communication, while various dialects are spoken for daily life.",
    metadata: {
      total_speakers: "310 million",
      iso_codes: ["ar", "ara"],
      script: "Arabic script",
      status: "Living"
    },
    children: []
  }
];

export default languageData;