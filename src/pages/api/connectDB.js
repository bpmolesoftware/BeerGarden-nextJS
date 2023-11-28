import mysql from 'mysql2/promise';
const fs = require("fs");

const host = process.env.PLANETSCALE_DB_HOST;
const database = process.env.PLANETSCALE_DB;
const user = process.env.PLANETSCALE_DB_USERNAME;
const password = process.env.PLANETSCALE_DB_PASSWORD;
const sslCert = process.env.PLANETSCALE_SSL_CERT_PATH;

const createConnectionToDB = async () => {
  const connectToDB = await mysql.createConnection({
    host,
    database,
    user,
    password,
    ssl: {
      ca: fs.readFileSync(sslCert)
  }
  });
  return connectToDB;
};

export { createConnectionToDB };
