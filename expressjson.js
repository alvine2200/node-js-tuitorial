const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("homepage resource hit");
  //res.status(200).send(`<h1>Home Page Found</h1>`);
  res.json([{ name: 'Alvine' }, { phone: '0712135643' }]);
});

app.all("*", (req, res) => {
  res.status(404).send(`<h1>Not Found status</h1>`);
});

app.listen(5000, () => {
  console.log("server listening to port 5000....");
});
