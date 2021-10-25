const express = require("express");
const knex = require("./knex");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// const dummyData = [
//   {
//     id: 1,
//     title: "Today's",
//     content: "This is just a dummy data",
//   },
//   {
//     id: 2,
//     title: "Tomorrow's",
//     content: "This is just a dummy data",
//   },
// ];

app.get("/notes", async (req, res) => {
  let data = await knex().select().table("notes");
  console.log(data);
  res.send(200);
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
