// server.js
const express = require('express');
const languageRoutes = require('./routes/languageRoutes');

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); 

// Mount the language routes
app.use('/api/languages', languageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});