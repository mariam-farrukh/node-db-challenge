const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  getTasks,
  addTask
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects").where({ id });
}

function addProject(project) {
  return db("projects").insert(project);
}

function getTasks(id) {
  return db("projects")
    .innerJoin("tasks", "tasks.project_id", "projects.id")
    .select(
      "projects.project_name",
      "projects.project_description",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.completed",
      "tasks.project_id"
    )
    .where({ project_id: id });
}

function addTask(id, task) {
  return db("tasks")
    .where({ project_id: id })
    .insert(task);
}