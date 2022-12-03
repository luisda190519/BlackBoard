const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", (req, res) => {});

router
  .route("/:gradesID")
  .get((req, res) => {})

  .post((req, res) => {});

module.exports = router;
