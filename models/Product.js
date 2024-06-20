const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
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
// images:[
// "http://res.cloudinary.com/dgp4vzn3m/image/authenticated/s--RLoasEWq--/v1714048357/players/2024/Alhassan%20_Ibrahim/IMG-20220425-WA000294536.jpg",
//   "http://res.cloudinary.com/dgp4vzn3m/image/authenticated/s--IK0Y7RNu--/v1717368407/players/2024/Alhassan%20_Ibrahim/baba60547.jpg",
//   "http://res.cloudinary.com/dgp4vzn3m/image/authenticated/s--gaXTDUN8--/v1717368409/players/2024/Alhassan%20_Ibrahim/fear20649.jpg",
//   "http://res.cloudinary.com/dgp4vzn3m/image/authenticated/s--JeouJYFF--/v1717368411/players/2024/Alhassan%20_Ibrahim/fear-Allah11551.jpg",
//   "http://res.cloudinary.com/dgp4vzn3m/image/authenticated/s--skkzkEsL--/v1717368413/players/2024/Alhassan%20_Ibrahim/hour94352.jpg"]
// sizes:[{size:'3',isSelected:false}]

// {
// "name":"name",
// "title":"title1",
// "description":"description",
// "category":"category",
// "price":"price",
// "oldPrice":"oldPrice",
// "images":["http://res.cloudinary.com/dgp4vzn3m/image/authenticated/s--RLoasEWq--/v1714048357/players/2024/Alhassan%20_Ibrahim/IMG-20220425-WA000294536.jpg",
  // "http://res.cloudinary.com/dgp4vzn3m/image/authenticated/s--IK0Y7RNu--/v1717368407/players/2024/Alhassan%20_Ibrahim/baba60547.jpg",
  // "http://res.cloudinary.com/dgp4vzn3m/image/authenticated/s--gaXTDUN8--/v1717368409/players/2024/Alhassan%20_Ibrahim/fear20649.jpg",
  // "http://res.cloudinary.com/dgp4vzn3m/image/authenticated/s--JeouJYFF--/v1717368411/players/2024/Alhassan%20_Ibrahim/fear-Allah11551.jpg",
  // "http://res.cloudinary.com/dgp4vzn3m/image/authenticated/s--skkzkEsL--/v1717368413/players/2024/Alhassan%20_Ibrahim/hour94352.jpg",
  // "],
// "sizes":[{"size":"3","isSelected":false}]
// }
