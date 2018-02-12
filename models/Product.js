const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    seller_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    url_img: String,
    tipo: { type: String,
    enum: ['deportes', 'hola']
    },
    precio: Number,
    texto: String
}, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;