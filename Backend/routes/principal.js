const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const student = require("../models/student");
const teacher = require("../models/teacher");
const {checkDuplicatedEmail,verifyLogin, getID} = require("../middlewares/loginAndSignUp");
const router = express.Router();

router.get("/", (req, res) => {
    res.json(req.session.userID)
});

router.get("/login/:role", (req, res) =>{
    res.json("Login page");
})

router.post("/login/:role", async (req, res) =>{
    const person = {email: req.body.email, password: req.body.password};

    if (await verifyLogin(person, req.params.role)) {
        req.session.userID = getID(person, req.params.role);
        req.session.role = req.params.role;
        res.json("Login succesfully")
    } else {
        res.json("Email or password incorrect");
    }
})

router.get("/register/:role", (req, res) =>{
    res.json("Register page");
})

router.post("/register/:role", async (req, res) =>{
    const person = {
        "name.first": req.body.first,
        "name.last": req.body.last,
        age: req.body.age,
        gender: req.body.age,
        document: req.body.document,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
    };

    if (await checkDuplicatedEmail(person, req.params.role)) {
        if (req.params.role === "student") {
            const newStudent = new student(person);
            await newStudent.save();
        } else {
            const newTeacher = new teacher(person);
            await newTeacher.save();
        }
        req.session.userID = getID(person, req.params.role);
        req.session.role = req.params.role;
        return res.json("Login succesfully")
    } else {
        res.json("Email alredy exist");
    }
})

router.get("/logout", (req, res) => {
    res.json("logout");
})

router.post("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login");
})

module.exports = router;
