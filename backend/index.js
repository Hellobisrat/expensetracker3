import express from 'express';
import cors from 'cors';

import db from './config/db.js';
import dotenv from "dotenv";
import expenseRouter from './router/expenseRoute.js';
dotenv.config();

const PORT = process.env.PORT || 3000;

console.log('process.env.PORT:',PORT)

const app = express();






app.use(express.json())
app.use(cors())
app.use('/expense',expenseRouter)

// ✅ GET all expenses directly in `index.js`


// ✅ Start the server
app.listen(PORT, async () => {
  try {
    await db();
    console.log(`✅ Server running at http://localhost:${PORT}`);
  } catch (error) {
    console.log('❌ Connection error:', error);
  }
});


