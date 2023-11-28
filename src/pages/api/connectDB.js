import mysql from 'mysql2/promise';

const host = process.env.PLANETSCALE_DB_HOST;
const database = process.env.PLANETSCALE_DB;
const user = process.env.PLANETSCALE_DB_USERNAME;
const password = process.env.PLANETSCALE_DB_PASSWORD;

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
