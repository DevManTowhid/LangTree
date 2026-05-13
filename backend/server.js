import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // Automatically loads .env variables
import languageRoutes from './routes/languageRoutes.js'; // Extension is mandatory in ESM

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); 

// Enable CORS for development
app.use(cors({
    origin: 'http://localhost:3000', 
}));

// Mount the language routes
app.use('/api/languages', languageRoutes);

const PORT = process.env.PORT || 5000;

/**
 * Server listener bound to all interfaces ("::") 
 * to handle both IPv4 and IPv6 traffic simultaneously.
 */
app.listen(PORT, "::", () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`👉 IPv4: http://127.0.0.1:${PORT}`);
    console.log(`👉 IPv6: http://localhost:${PORT}`);
});