const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/products");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const orderRoute = require("./routes/orders");
const cartRoute = require("./routes/cart");

const app = express();
const dotenv = require("dotenv");
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err.message));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/products/", productRoute); //PRODUCTS
app.use("/api/auth/", authRoute); //AUTH
app.use("/api/orders", orderRoute); //ORDERS
app.use("/api/cart", cartRoute); //CART
app.use("/api/users", userRoute); //USERS

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Sneakershop listening on port ${port}!`));
