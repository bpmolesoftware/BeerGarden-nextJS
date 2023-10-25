import mysql from "mysql2/promise";

export default async function handler(req, res) {

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "beergardendatabase",
        // port: 8889,
        user: "root",
        password: "verysecretbeergardenpass",
        //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    });

    try {
        const query = "SELECT id, title, description, address, openingtimes, kids, beer, tipp, coordinates FROM beergardens_001 limit 5";
        // limit 5 shows only the first 5 resluts
        // useful for testing

        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
        res.status(200).json({results:data});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}