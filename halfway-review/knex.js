const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
  },
});

module.exports = knex;
