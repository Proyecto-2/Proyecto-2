const mongoose = require("mongoose");
const { Schema } = mongoose;
const cartSchema = new Schema(
 {
   ownerId: { type: Schema.Types.ObjectId, ref: "User" },
   products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
 },
 {
   timestamps: true
 }
);

module.exports = mongoose.model("Cart", cartSchema);