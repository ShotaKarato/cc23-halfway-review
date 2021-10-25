exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("notes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("notes").insert([
        { title: "test", content: "This is dummy data 3" },
        { title: "hello!", content: "This is dummy data 4" },
        { title: "nice", content: "This is dummy data 5" },
        { title: "change", content: "This is dummy data 6" },
        { title: "feature", content: "This is dummy data 7" },
        { title: "memo", content: "This is dummy data 8" },
      ]);
    });
};
