const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: [String], required: true },
    price: { type: String, required: true },
    oldPrice: { type: String, required: true },
    category: { type: String, required: true },
    sizes: {
      type: [
        {
          size: { type: String, required: true },
          isSelected: { type: Boolean, required: false },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
// name:"name"
// title:"title1"
// description:"description"
// category:"category"
// price:"price"
// oldPrice:"oldPrice"
// imageUrl:["image1"]
// sizes:[{size:'3',isSelected:false}]

// {
// "name":"name",
// "title":"title1",
// "description":"description",
// "category":"category",
// "price":"price",
// "oldPrice":"oldPrice",
// "imageUrl":["image1"],
// "sizes":[{"size":"3","isSelected":false}]
// }
