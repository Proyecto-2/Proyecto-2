const mongoose = require("mongoose");
const User = require("../models/User");
const Prod = require("../models/Product");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

mongoose.connect("mongodb://localhost/project2")
.then(() => console.log("Conectado"))
.catch( e => console.log(e));

const salt = bcrypt.genSaltSync(bcryptSalt);



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

User.collection.drop();
Prod.collection.drop();


// create the user
const user = new User({
    name: "j",
    username: 'John',
    password: bcrypt.hashSync("123", salt),
    mail: "p@p.com"
});

user.save().then(user =>{
    return Prod.create(prod)
    .then(() => {
        console.log("Created products")
        mongoose.disconnect();
    })
})
.catch(e => {
    console.log(e)
})