import { createConnectionToDB } from '../connectDB';

const myfunc = async (req, res) => {
  const dbconnection = await createConnectionToDB();
  try {
    const { name, id, comment } = JSON.parse(JSON.stringify(req.body));
    const query = `INSERT INTO Comments (name, commentText, beergardenId) values ("${name}", "${comment}", ${id})`;

    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default myfunc;
