const mongoose = require("mongoose");
const Auth = require("../models/User");
const Prod = require("../models/Product");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

mongoose.connect("mongodb://localhost/project2").then(() => console.log("Conectado"));

const salt = bcrypt.genSaltSync(bcryptSalt);

const auth = [
    {
        name: "j",
        username: 'John',
        password: bcrypt.hashSync("123", salt),
        mail: "p@p.com"
    }
]

const prod = [
    {
        url_img: "https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg", 
        tipo: "Metal",
        precio: "1.50",
        texto: "Esto es una prueba"
    }
]

Auth.collection.drop();
Prod.collection.drop();



auth.forEach(c => {
    let au = new Auth(c);
    au.save((err, auth) => {
        if (err) {
            throw err;
        }
        console.log(`User saved ${auth.username}`);
    })
});

prod.forEach(c => {
    let pr = new Prod(c);
    pr.save((err, prod) => {
        if (err) {
            throw err;
        }
        console.log(`Product saved ${prod.texto}`);
        mongoose.disconnect();
    })
});