require("dotenv").config();
const mongoose = require("mongoose");
const Auth = require("../models/User");
const Prod = require("../models/Product");

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const dbURL = process.env.dbURL || "mongodb://localhost/project2";

const salt = bcrypt.genSaltSync(bcryptSalt);

const auth = [
  {
    name: "j",
    username: "John",
    password: bcrypt.hashSync("123", salt),
    mail: "p@p.com",
  },
];

const prod = [
  {
    name: "leche",
    url_img: "/uno.png",
    tipo: "Desnatada",
    precio: 1.5,
    cantidad: 2,
    texto: "SOY LA LECHE Y LA CAÑA",
  },
  {
    name: "leche",
    url_img: "/dos.png",
    tipo: "Desnatada",
    precio: 1.5,
    cantidad: 2,
    texto: "SOY LA LECHE Y LO SABES",
  },
  {
    name: "leche",
    url_img: "/tres.png",
    tipo: "Desnatada",
    precio: 1.5,
    cantidad: 2,
    texto: "YO DOY LECHES COMO PANES",
  },
  {
    name: "leche",
    url_img: "/cuatro.png",
    tipo: "Desnatada",
    precio: 1.5,
    cantidad: 2,
    texto: "SOY LA LECHE",
  },
];

async function seed() {
  await mongoose.connect(dbURL);
  console.log(`Conectado a ${dbURL}`);

  await Auth.collection.drop().catch(() => {});
  await Prod.collection.drop().catch(() => {});

  for (const c of auth) {
    const au = new Auth(c);
    const saved = await au.save();
    console.log(`User saved ${saved.username}`);
  }

  for (const c of prod) {
    const pr = new Prod(c);
    const saved = await pr.save();
    console.log(`Product saved ${saved.texto}`);
  }

  await mongoose.disconnect();
  console.log("Listo");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
