const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql2/promise");

app.get("/", async (req, res) => {
  const connection = await mysql.createConnection(config);
  await connection.execute(`CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`);
  await connection.execute(`INSERT INTO people(name) VALUES ('Ana')`);
  const [rows] = await connection.execute('select * from people');
  await connection.end();

  const peopleList = rows.map((row) => `<li>${row.id} - ${row.name}</li>`);
  res.send(`<h1>Full Cycle Rocks!</h1><ul>${peopleList.join('')}</ul>`);
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
