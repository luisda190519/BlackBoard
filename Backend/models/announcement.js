const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model("Announcement", announcementSchema);
