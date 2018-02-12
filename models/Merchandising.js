const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const merchandisingSchema = new Schema({
    
    tipo: String,
    precio: Number,

}, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;