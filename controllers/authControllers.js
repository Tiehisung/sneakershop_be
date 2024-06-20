const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  //Create user
  createUser: async (req, res) => {
    try {
      const { username, password, email, location } = req.body;
      const hashedPass = await bcrypt.hash(password, 10);
      const newUser = User({
        username,
        password: hashedPass,
        email,
        location,
      });

      await newUser.save();
      res.status(201).json({ message: "User successfully created" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //Login
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(401).json("User not found!");

      const isMatchedPass = await bcrypt.compare(req.body.password, user.password);
      !isMatchedPass && res.status(401).json("Wrong password!");

      //Sign user
      const userToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      //Exclude some fields
      const { __v, password, createdAt,updatedAt, ...others } = user._doc;
      res.status(200).json({ ...others, token: userToken });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to login! Check your credentials" });
    }
  },
};
