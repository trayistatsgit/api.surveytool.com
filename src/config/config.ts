import { Dialect } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
export const dbConfig = {
  host: process.env.DB_HOST,
  port: 1433,
  dialect: process.env.DB_TYPE as Dialect,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  sync: false,
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
      max: 1000,
      min: 1,
      idle: 10000,
      acquire: 60000
  }
};

export const config = {
  fileUploadPath : process.env.FILE_PATH,
  baseUrl:  process.env.API_BASE_URL
}
