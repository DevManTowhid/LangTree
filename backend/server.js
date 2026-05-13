// server.js
const express = require('express');
const languageRoutes = require('./routes/languageRoutes');

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); 

app.use(cors({
    origin: 'http://localhost:3000', // Allow all origins (for development). In production, specify your frontend URL.
}))

// Mount the language routes
app.use('/api/languages', languageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});