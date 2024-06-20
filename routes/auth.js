const router = require("express").Router();
const authControllers = require("../controllers/authControllers");

router.post("/register", authControllers.createUser);
router.post("/login", authControllers.loginUser);

module.exports = router;
