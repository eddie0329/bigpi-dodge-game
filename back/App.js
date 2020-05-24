const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const dbUrl = `mongodb://${dbHost}/${dbName}`;
console.log("try connecting to", dbUrl);
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName,
    user: dbUser,
    pass: dbPass,
    authSource: 'admin'
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
console.log("connected!");

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
