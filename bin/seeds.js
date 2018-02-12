const mongoose = require('mongoose');
const {dbURL} = require('../config');
const Product = require('../models/Product');

mongoose.connect(dbURL)

const products = [
    {
        name: 'Desnada',
        price: 9.99,
        description: 'Para cuidar la linea'
    },
    {
        name: 'Desnada',
        price: 9.99,
        description: 'Para cuidar la linea'
    }
];