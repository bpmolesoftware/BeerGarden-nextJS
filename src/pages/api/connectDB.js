import mysql from 'mysql2/promise';
const fs = require("fs");

// const host = process.env.PLANETSCALE_DB_HOST;
// const database = process.env.PLANETSCALE_DB;
// const user = process.env.PLANETSCALE_DB_USERNAME;
// const password = process.env.PLANETSCALE_DB_PASSWORD;
// const sslCert = process.env.PLANETSCALE_SSL_CERT_PATH;

const host = process.env.HOST;
const database = process.env.DATABASE;
const user = process.env.USER;
const password = process.env.PASSWORD;

const createConnectionToDB = async () => {
  const connectToDB = await mysql.createConnection({
    host,
    database,
    user,
    password,
   
  });
  return connectToDB;
};

export { createConnectionToDB };
