const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    first: {
      type: String,
      required: false,
    },
    last: {
      type: String,
      require: false,
    },
  },
  email: String,
  age: Number,
  gender: String,
  document: Number,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
