const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/notes", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
