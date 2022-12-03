const bcrypt = require("bcrypt");
const student = require("../models/student");
const teacher = require("../models/teacher");

module.exports.checkDuplicatedEmail = async function (user, role) {
  const userSearched = await student.findOne({ email: user.email });
  const teacherFinded = await teacher.findOne({ email: user.email });

  if (userSearched === null && teacherFinded === null) {
    return true;
  }
  return false;
};

module.exports.verifyLogin = async function (user, role) {
  let userSearched = null;
  if (role === "student") {
    userSearched = await student.findOne({ email: user.email });
  } else {
    userSearched = await teacher.findOne({ email: user.email });
  }

  if (!(userSearched === null)) {
    if (bcrypt.compareSync(user.password, userSearched.password)) {
      return true;
    }
  }

  return false;
};
