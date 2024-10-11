import app from './app';
import dotenv from 'dotenv';
import { sequelize } from '../src/config/db/connection'; // Ensure the path is correct

// Load environment variables from .env file
dotenv.config();

// Define the port to listen on
const PORT: number = parseInt(process.env.PORT || '5000', 10);

// Start the server
app.listen(PORT, async () => {
    // Optionally sync the database when the server starts
    try {
        await sequelize.authenticate(); // Ensure connection is successful
        console.log('Connected to MSSQL database');
        console.log(`Server running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Error connecting to MSSQL database:', error);
    }
});
