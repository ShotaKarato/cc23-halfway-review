const express = require("express");
const knex = require("./knex");
const path = require("path");

const app = express();
const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use(express.json());

app.get("/notes", async (req, res) => {
  let data = await knex().select().table("notes");
  console.log(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
