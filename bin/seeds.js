const mongoose = require("mongoose");
const Auth = require("../models/User");
const Prod = require("../models/Product");
const Cart = require("../models/Cart");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

mongoose.connect("mongodb://admin:admin@ds237868.mlab.com:37868/proyecto2")
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
        url_img: "https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg",
        tipo: "Metal",
        precio: "1.50",
        texto: "Esto es una prueba"
    },
    {
        url_img: "https://www.positivos.com/tienda/modules/designer//uploaded/Productos/nuevas_gorras/dg-designer-978fce5b149746273013053180710056461.jpg",
        tipo: "Pop",
        precio: "3.50",
        texto: "Esto es una gorra"
    },
    {
        url_img: "http://www.ikea.com/es/es/images/products/lejaren-toalla-de-bano-beige__0516958_PE640557_S4.JPG",
        tipo: "Rock",
        precio: "5",
        texto: "Esto es una toalla"
    },
]



const cart = [
    {
        url_img: "https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg",
        texto: "Esto es una prueba"
    }
]

Auth.collection.drop();
Prod.collection.drop();
Cart.collection.drop();



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
    })
});

prod.forEach(c => {
    let cr = new Cart(c);
    cr.save((err, cart) => {
        if (err) {
            throw err;
        }
        console.log(`Created ${cart.texto}`);
        mongoose.disconnect();
    })
})
