const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    url_img: String,
    tipo: { type: String,
        enum: ['Rock', 'Metal', 'Pop']
    },
    precio: Number,
    texto: String
}, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;