import mysql from 'mysql2/promise';

const host = process.env.DATABASE_HOST;
//const database = process.env.DATABASE;
const user = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

const createConnectionToDB = async () => {
  const connectToDB = await mysql.createConnection({
    host,
    //database,
    user,
    password,
  });
  return connectToDB;
};

export { createConnectionToDB };
