exports.seed = function(knex) {
  return knex("projects").insert([
    {
      project_name: "Project 1",
      project_description: "This is project description",
      completed: 0
    },
    {
      project_name: "Project 2",
      project_description: "Another project description",
      completed: 0
    },
    {
      project_name: "Project 3",
      project_description: "What is this project?",
      completed: 0
    }
  ]);
};