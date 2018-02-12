const mongoose = require("mongoose");
const Auth = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

mongoose.connect("mongodb://localhost/project2").then(() => console.log("Conectado"));

const salt = bcrypt.genSaltSync(bcryptSalt);

const auth = [
    {
        name: String,
        username: 'John',
        password: bcrypt.hashSync("123", salt),
        mail: String
    }
]

Auth.collection.drop();

auth.forEach(c => {
    let au = new Auth(c);
    au.save((err, auth) => {
        if (err) {
            throw err;
        }
        console.log(`User saved ${auth.username}`);
        mongoose.disconnect();
    })
});