const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellSchema = new Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    buyer_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const Sell = mongoose.model("Sell", sellSchema);

module.exports = Sell;
