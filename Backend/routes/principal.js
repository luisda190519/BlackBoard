const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const student = require("../models/student");
const teacher = require("../models/teacher");
const {
    checkDuplicatedEmail,
    verifyLogin,
} = require("../middlewares/loginAndSignUp");

const router = express.Router();
const saltRounds = 10;

router.get("/", (req, res) => {
    res.render("principal/home");
});

router.route("/login/:role")
    .get((req, res) => {
        res.render("principal/login");
    })

    .post(async (req, res) => {
        const person = {
            email: req.body.email,
            password: req.body.password,
        };

        if (await verifyLogin(person, req.body.role)) {
            req.session.userActive = true;
            res.redirect("/");
        } else {
            res.send("Email or password incorrect");
        }
    });

router.route("/register/:role")
    .get((req, res) => {
        res.render("principal/register");
    })

    .post(async (req, res) => {
        const person = {
            "name.first": req.body.first,
            "name.last": req.body.last,
            age: req.body.age,
            gender: req.body.age,
            document: req.body.document,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, saltRounds),
        };

        if (await checkDuplicatedEmail(person, req.body.role)) {
            if (req.body.role === "student") {
                const newStudent = new student(person);
                await newStudent.save();
            } else {
                const newTeacher = new teacher(person);
                await newTeacher.save();
            }
            req.session.userID = true;
            return res.redirect("/");
        } else {
            res.send("Email alredy exist");
        }
    });

router.route("/logout")
    .get((req, res) => {
        res.render("principal/logout");
    })

    .post((req, res) => {
        req.session.destroy();
        res.redirect("/login");
    });

module.exports = router;
