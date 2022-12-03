const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("home");
});

router
  .route("/:courseID")
  .get((req, res) => {
    res.send(req.params.courseID);
  })

  .post((req, res) => {});

module.exports = router;
