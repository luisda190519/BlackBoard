const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  course:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  grade: {
    type: Number,
  },
});

module.exports = mongoose.model("Grade", gradeSchema);
