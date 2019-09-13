exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      task_description: "Read a book",
      task_notes: "read read read",
      completed: 0,
      project_id: 1
    },
    {
      task_description: "Study for exam",
      task_notes: "study study study",
      completed: 0,
      project_id: 1
    },
    {
      task_description: "Take pictures",
      task_notes: "click click click",
      completed: 0,
      project_id: 2
    },
    {
      task_description: "Tour the city",
      task_notes: "look at things",
      completed: 0,
      project_id: 2
    },
    {
      task_description: "Get supplies",
      task_notes: "order supplies online",
      completed: 0,
      project_id: 3
    },
    {
      task_description: "Project presentation",
      task_notes: "present project to group for review",
      completed: 0,
      project_id: 3
    },
  ]);
};