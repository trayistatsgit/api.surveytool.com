import { Sequelize } from 'sequelize';
import { dbConfig } from './config';

// Create a Sequelize instance
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions,
    pool: dbConfig.pool,
    timezone: '+00:00'
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

connect()
// Export the Sequelize instance for use in your models
export { sequelize };
