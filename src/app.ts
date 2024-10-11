
import express, { Application } from 'express';
import dotenv from 'dotenv';
// import {sequelize} from './config/db/config';

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());

// Test route
app.get('/api/v1/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Database connection
// sequelize.authenticate()
//   .then(() => console.log('Database connected'))
//   .catch((err:any) => console.log('Error: ' + err));

export default app;



