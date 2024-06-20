const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        cartItem: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
      },
    ],
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
