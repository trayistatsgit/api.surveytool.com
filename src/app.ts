
import express, { Application } from 'express';
import dotenv from 'dotenv';
import { allRouter } from './v1/routes/routes';
// import {sequelize} from './config/db/config';
const app: Application = express();

// Middleware
app.use(express.json());
app.use('api/v1/',allRouter)

// Test route
app.get('/api/v1/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Database connection
// sequelize.authenticate()
//   .then(() => console.log('Database connected'))
//   .catch((err:any) => console.log('Error: ' + err));

export default app;



