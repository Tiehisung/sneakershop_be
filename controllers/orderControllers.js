const Product = require("../models/Product"); //Sake of population
const Order = require("../models/Order");
module.exports = {
  getUserOrders: async (req, res) => {
    try {
      const userId = req.user.id; //found in middleware
      const userOrders = await Order.find({ userId })
        .populate({
          path: "productId",
          select: "-sizes -oldPrice -description -category",
        })
        .exec();
      res.status(200).json(userOrders);
    } catch (error) {
      res.status(500).json({ message: "Failed to get user orders" });
    }
  },
};
