const User = require("../models/User");

module.exports = {
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      //Delete some fields
      const { __v, password, createdAt, updatedAt, ...userdData } = user._doc;
      res.status(200).json({ ...userdData });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deletUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.user.id);
      //Delete some fields
      res.status(200).json("User deleted!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
