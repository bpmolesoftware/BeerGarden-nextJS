import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const dbconnection = mysql.createPool({
    host: 'localhost',
    database: 'beergardendatabase',
    user: 'root',
    password: 'verysecretbeergardenpass',
  });

  try {
    const query =
      'SELECT id, title, description, address, openingtimes, kids, beer, tipp, coordinates FROM beergardens_001';

    const values = [];
    const [data] = await dbconnection.execute(query, values);
    // dbconnection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
