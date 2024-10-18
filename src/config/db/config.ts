// config.ts
export const dbConfig = {
  dialect: 'mssql' as 'mssql',
  host: '68.178.207.198',  // IP address of server running MSSQL
  username: 'sptstaging', // User name to your MSSQL database
  password: 'SPT@123106',
  database: 'spt_staging', // Use the specified database
  port: 1433,
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
