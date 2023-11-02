import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const { searchValue } = req.query;

  const dbconnection = mysql.createPool({
    host: 'localhost',
    database: 'beergardendatabase',
    user: 'root',
    password: 'verysecretbeergardenpass',
  });

  try {
    const query = `SELECT id, title, description, address, openingtimes, kids, beer, tipp FROM beergardens_001 as beer WHERE beer.title like "%${searchValue}%"`;

    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
