const express = require("express");
const authRoutes = express.Router();
const bcrypt = require("bcrypt");
const passport = require('passport')
const User = require("../models/User");
const bcryptSalt = 10;

authRoutes.get("/signup", (req, res, next) => {
    res.render("auth/signup");
});

authRoutes.post("/signup", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const mail = req.body.mail;
    const name = req.body.name;

    if (username === "" || password === "" || mail === "" || name === "") {
        res.render("auth/signup", { message: "Rellene todos los campos" });
        return;
    }

    User.findOne({ username }, "username", (err, user) => {
        if (user !== null) {
            res.render("auth/signup", { message: "The username already exists" });
            return;
        }


        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            password: hashPass,
            mail,
            name
        });

        newUser.save((err) => {
            if (err) {
                res.render("auth/signup", { message: "Something went wrong" });
            } else {
                res.redirect("/");
            }
        });
    });
});



authRoutes.get("/login", (req, res, next) => {

    res.render("auth/login", { "message": req.flash("Conectado correctamente") });
});

authRoutes.post("/login", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "" || password === "") {
        res.render("auth/login");
        return;
    }

    authRoutes.post("/login", passport.authenticate("local", {
        successRedirect: "/tipo",
        failureRedirect: "/login"

    }));

    // passport.use(new LocalStrategy((username, password, next) => {
    //     User.findOne({ username }, (err, user) => {
    //       if (err) {
    //         return next(err);
    //       }
    //       if (!user) {
    //         return next(null, false, { message: "Incorrect username" });
    //       }
    //       if (!bcrypt.compareSync(password, user.password)) {
    //         return next(null, false, { message: "Incorrect password" });
    //       }

    //       return next(null, user);
    //     });
    //   }));

});

authRoutes.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

module.exports = authRoutes;