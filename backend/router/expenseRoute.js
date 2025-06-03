

import express from 'express';
import { getExpenses, addExpenses } from '../controller/expenseController.js';

const router = express.Router();

// Correctly define routes
router.get('/', getExpenses); // Handles GET requests for expenses
router.post('/', addExpenses); // Handles POST requests for adding expenses

export default router;