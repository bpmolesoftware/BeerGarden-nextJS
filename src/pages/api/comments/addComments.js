import { createConnectionToDB } from '../connectDB';

const myfunc = async (req, res) => {
  const dbconnection = await createConnectionToDB();
  const today = new Date();
  try {
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateTime = `${date} ${time}`;

    const { name, id, comment } = JSON.parse(JSON.stringify(req.body));
    const query = `INSERT INTO Comments (name, commentText, beergardenId, dateAndTime, rating) values ("${name}", "${comment}", ${id}, "${date} ${time}")`;

    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default myfunc;
