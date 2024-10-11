import { Sequelize } from 'sequelize';
import { dbConfig } from './config';

// Create a Sequelize instance
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions,
    pool: dbConfig.pool
});

// Function to connect to the database
async function connect(): Promise<void> {
    try {
        await sequelize.authenticate();
        console.log('Connected to MSSQL database');
    } catch (error) {
        console.error('Error connecting to MSSQL database:', error);
    }
}

// Connect to the database when the file is loaded
connect();

// Export the Sequelize instance for use in your models
export { sequelize };
