const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createSchema = new Schema({
    url_img: String,
    texto: String,
    tipo: String,
    cantidad: Number,
    url_img_saved: String,
    texto_saved: String   
}, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const Create = mongoose.model("Create", createSchema);

module.exports = Create;