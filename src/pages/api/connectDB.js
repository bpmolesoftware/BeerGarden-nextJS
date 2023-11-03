import mysql from 'mysql2/promise';

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
