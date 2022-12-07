const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router
  .route("/:courseID")
  .get((req, res) => {
    res.json(req.session.userActive, req.session.role)
  })

  .post((req, res) => {

    const course = {
      name:req.body.name,
      description:req.body.description,
      quantity:req.body.quantity,
      teacher:req.session.userID
    }

  });

module.exports = router;
