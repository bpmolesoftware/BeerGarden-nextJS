import { createConnectionToDB } from '../connectDB';

export default async function handler(req, res) {
  const { searchValue } = req.query;

  const dbconnection = await createConnectionToDB();

  try {
    const query = 'INSERT INTO Comments (name, commentText) values ("", "")';

    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
