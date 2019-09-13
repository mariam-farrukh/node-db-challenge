const express = require("express");
const Resources = require("./resource-model.js");
const router = express.Router();

router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Error getting resources from database" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Resources.getResourceById(id)
    .then(resource => {
      if (!resource[0]) {
        res.status(404).json({ message: "Invalid resource ID" });
      } else {
        res.status(200).json(resource);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error getting resource from database" });
    });
});

router.post("/", (req, res) => {
  const resource = req.body;

  Resources.addResource(resource)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding resource to database" });
    });
});

module.exports = router;