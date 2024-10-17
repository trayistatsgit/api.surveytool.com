import { Sequelize, Options, Dialect } from 'sequelize';
import { dbConfig } from './config';
interface SequelizeConfig extends Options {
  host: string;
  port: number;
  dialect: Dialect;
}

const createSequelizeInstance = (database: string, username: string, password: string, host: string, port: number): Sequelize => {
  return new Sequelize(database, username, password, {
    host,
    port,
    dialect: dbConfig.dialect as Dialect,
    logging: true,
    dialectOptions: {
      options: {
        encrypt: true,
        enableArithAbort: true,
        connectionTimeout: 30000,
        requestTimeout: 60000,
      },
    },
    define: {
      underscored: false,
      freezeTableName: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
      timestamps: true,
    },
    pool: {
      max: 10,
      min: 2,
      idle: 10000,
      acquire: 60000,
      evict: 10000,
    },
  } as SequelizeConfig);
};

export const sequelize = createSequelizeInstance(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig.host, dbConfig.port);
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log(`✔ Connected to ${dbConfig.database} successfully.`);
  } catch (error) {
    console.error('✘ Unable to connect to the database:', error);
    throw error;
  }
};


export { connectToDatabase };
export default sequelize;
