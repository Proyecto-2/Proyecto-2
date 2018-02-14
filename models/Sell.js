const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellSchema = new Schema({
    texto: String,
    cantidad: { type: number, default: 1 },
    precio: number
}, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const Sell = mongoose.model("Sell", sellSchema);

module.exports = Sell;
