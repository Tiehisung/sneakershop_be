const Product = require("../models/Product");

module.exports = {
  createProduct: async (req, res) => {
    try {
      const data = req.body;
      const newProduct = new Product(data);
      await newProduct.save();
      res.status(200).json("Product created");
    } catch (error) {
      res.status(500).json("Failed to create product");
    }
  },
  //Get all products
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json("Failed to get products");
    }
  },
  //Get single product
  getProduct: async (req, res) => {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      const { __v, createdAt, updatedAt, ...productData } = product._doc;
      res.status(200).json(productData);
    } catch (error) {
      res.status(500).json("Failed to get product");
    }
  },

  //Search product by aggregation
  searchProduct: async (req, res) => {
    try {
      const results = await Product.aggregate([
        {
          $search: {
            index: "sneakers",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).json(results);
    } catch (error) {}
  },
};
