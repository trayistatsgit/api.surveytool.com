// config.ts
export const dbConfig = {
  dialect: 'mssql' as 'mssql',
  host: '68.178.207.198',  // IP address of server running MSSQL
  username: 'sptstaging', // User name to your MSSQL database
  password: 'SPT@123106',
  database: 'spt_staging', // Use the specified database
  port: 1433,
  dialectOptions: {
      encrypt: true, // For Azure, set this to true
      trustServerCertificate: true // Use this for local dev / self-signed certs
  },
  pool: {
      max: 1000,
      min: 1,
      idle: 10000,
      acquire: 60000
  }
};
