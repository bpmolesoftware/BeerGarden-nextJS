import { createConnectionToDB } from '../connectDB';

export default async function handler(req, res) {
  const { id } = req.query;

  const dbconnection = await createConnectionToDB();

  try {
    const query = `SELECT title, description, address, openingtimes, kids, beer, tipp, coordinates FROM beergardens_001 as beer WHERE beer.id like ${id}`;

    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
