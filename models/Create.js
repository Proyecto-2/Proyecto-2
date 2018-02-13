const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createSchema = new Schema({
    url_img: String,
    texto: String
}, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const Create = mongoose.model("Create", createSchema);

module.exports = Create;