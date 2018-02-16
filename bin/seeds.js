const mongoose = require("mongoose");
const Auth = require("../models/User");
const Prod = require("../models/Product");
const Cart = require("../models/Cart");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

mongoose.connect("mongodb://localhost/project2")
    .then(() => console.log("Conectado"))
    .catch(e => console.log(e));

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
        name: "leche",
        url_img: "/uno.png",
        tipo: "Desnatada",
        precio: 1.5,
        cantidad: 2,
        texto: "SOY LA LECHE Y LA CAÑA"
    },
    {
        name: "leche",
        url_img: "/dos.png",
        tipo: "Desnatada",
        precio: 1.5,
        cantidad: 2,
        texto: "SOY LA LECHE Y LO SABES"
    },
    {
        name: "leche",
        url_img: "/tres.png",
        tipo: "Desnatada",
        precio: 1.5,
        cantidad: 2,
        texto: "YO DOY LECHES COMO PANES"
    },
    {
        name: "leche",
        url_img: "/cuatro.png",
        tipo: "Desnatada",
        precio: 1.5,
        cantidad: 2,
        texto: "SOY LA LECHE"
    }
]



// const cart = [
//     {
//         url_img: "https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg",
//         texto: "Esto es una prueba"
//     }
// ]

Auth.collection.drop();
Prod.collection.drop();
// Cart.collection.drop();



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

// prod.forEach(c => {
//     let cr = new Cart(c);
//     cr.save((err, cart) => {
//         if (err) {
//             throw err;
//         }
//         console.log(`Created ${cart.texto}`);
//         mongoose.disconnect();
//     })
// })
