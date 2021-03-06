const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    url_img: String,
    tipo: { type: String,
        enum: ['Entera', 'Semidesnatada', 'Desnatada']
    },
    precio: Number,
    cantidad: Number,
    texto: String
}, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
