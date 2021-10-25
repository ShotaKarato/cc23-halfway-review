const express = require("express");
const knex = require("./knex/knex");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use(cors());
app.use(express.json());

// get all notes
app.get("/notes", async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    let data = await knex().select().table("notes");
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// add notes to database
app.post("/notes", async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    // insert note into table
    let note = req.body;
    await knex("notes").insert(note);

    // send back data
    res.send(200);
  } catch (error) {
    console.log(error);
  }
});

// delete notes from database
app.delete("/notes/:id", async (req, res) => {
  let { id } = req.params;
  await knex("notes").where("id", id).del();
  res.send(200);
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
