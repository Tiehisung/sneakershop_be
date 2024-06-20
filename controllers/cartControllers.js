const Product = require("../models/Product");
const Cart = require("../models/Cart");
const { findOneAndUpdate } = require("../models/User");

module.exports = {
  addToCart: async (req, res) => {
    try {
      const userId = req.user.id; //found in middleware
      const { cartItem, quantity } = req.body; //cartItem is objectId

      const userCart = await Cart.findOne({ userId }); //Check existing cart by user
      console.log("userCart", userCart);
      if (userCart) {
        //check product exists
        const existingProduct = userCart.products?.find(
          (product) => product.cartItem.toString() == cartItem
        );
        if (existingProduct) {
          existingProduct.quantity += 1; //Inc products
          await userCart.save();
          res.status(200).json("Product added");
        } else {
          //push new product
          userCart.products.push({ cartItem, quantity });
          await userCart.save();
          res.status(200).json("Product added at first");
        }
      } else {
        const newCart = new Cart({
          userId,
          products: [{ cartItem, quantity }],
        });
        await newCart.save();
        res
          .status(200)
          .json(
            `Cart created and ${
              quantity == 1 ? quantity + " product" : quantity + " products"
            } added`
          );
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to add to cart: " + error.message });
    }
  },
  getCart: async (req, res) => {
    const userId = req.user.id;
    try {
      const cart = await Cart.find({ userId });
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteCartItem: async (req, res) => {
    const cartItemId = req.params.cartItem;
    try {
      const updatedCart = await findOneAndUpdate(
        { userId: req.user.id, "products._id": cartItemId },
        {
          $pull: { products: { _id: cartItemId } },
        },
        { new: true }
      );
      if (!updatedCart) {
        return res.status(500).json("Product not in cart");
      }
      res.status(200).json({ message: "Item deleted from successfully!" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
