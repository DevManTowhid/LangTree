// routes/languageRoutes.js
// const express = require('express');
// const router = express.Router();
// const { getLanguage } = require('../controllers/languageController');

import express from 'express';
import { getLanguage } from '../controllers/languageController.js';

const router = express.Router();


// GET /api/languages/:slug
// The ":slug" acts as a dynamic variable that gets passed to req.params.slug
router.get('/:slug', getLanguage);

export default router;