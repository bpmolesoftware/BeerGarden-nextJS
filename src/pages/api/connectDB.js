import mysql from 'mysql2/promise';

export default async function connectToDB(req, res) {
  const { searchValue } = req.query;

  const dbconnection = mysql.createPool({
    host: 'localhost',
    database: 'beergardendatabase',
    user: 'root',
    password: 'verysecretbeergardenpass',
  });

  return dbconnection;
}
