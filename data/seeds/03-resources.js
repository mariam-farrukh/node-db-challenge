exports.seed = function(knex, Promise) {
  return knex("resources").insert([
    {
      resource_name: "resource 1",
      resource_description: "resource description 1"
    },
    {
      resource_name: "resource 2",
      resource_description: "resource description 2"
    },
    {
      resource_name: "resource 3",
      resource_description: "resource description 3"
    },
    {
      resource_name: "resource 4",
      resource_description: "resource description 4"
    },
    {
      resource_name: "resource 5",
      resource_description: "resource description 5"
    },
    {
      resource_name: "resource 6",
      resource_description: "resource description 6"
    }
  ]);
};