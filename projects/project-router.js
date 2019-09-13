const express = require("express");
const Projects = require("./project-model.js");
const router = express.Router();

// Projects

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      projects.forEach(project => {
        if (project.completed === 1) {
            project.completed = "true"
        } else {
            project.completed = "false"
        }
      })
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Error getting projecs from database" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.getProjectById(id)
    .then(project => {
        project.forEach(p => {
            if (p.completed === 1) {
                p.completed = "true"
            } else {
                p.completed = "false"
            }
        })
        if (!project[0]) {
            return res.status(404).json({ message: "Invalid project id" });
        } else {
            res.status(200).json(project);
        }
    })
    .catch(err => {
      res.status(500).json({ message: "Error getting project from database" });
    });
});

router.post("/", (req, res) => {
  const project = req.body;

  if (!project.project_name) {
    return res.status(404).json({ message: "Missing project name" });
  }

  Projects.addProject(project)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding project to database" });
    });
});

// Tasks

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  console.log(id);
  Projects.getTasks(id)
    .then(tasks => {
        tasks.forEach(task => {
        if (task.completed === 1) {
            task.completed = "true"
        } else {
            task.completed = "false"
        }
        })
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({message: "Error getting tasks"})
    })  
});

router.post("/:id/tasks", (req, res) => {
  const { id } = req.params;
  const task = req.body;
  console.log(id);
  Projects.getProjectById(id).then(project => {
    if (!project[0]) {
      return res.status(404).json({ message: "Invalid Project ID" });
    }
    if (!task.task_description) {
      return res.status(404).json({ message: "Missing task description" });
    }
    Projects.addTask(id, task)
      .then(count => {
        res.status(201).json(count);
      })
      .catch(err => {
        res.status(500).json({ message: "Error adding task to database" });
      });
  });
});

module.exports = router;