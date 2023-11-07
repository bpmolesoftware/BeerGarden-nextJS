import { createConnectionToDB } from '../connectDB';

export default async function handler(req, res) {
  const { id } = req.query;
  const dbconnection = await createConnectionToDB();

  try {
    const query = `SELECT name, commentText from comments as cmt JOIN beergardens_001 as beer ON beer.id = cmt.beergardenId where beer.id = ${id}`;

    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
