const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const {
  protect,
} = require("../middleware/authMiddleware"); /* Use this on any routes we want to protect, provide it as a second argument */

/* REST Standard */

/* /api/users */
router.post("/", registerUser);

/* /api/users/login */
router.post("/login", loginUser);

/* /api/users/login/me */
/* Test Route by logging in w/ login route and use the token that is returned under the authorization tab in Postman. Type= BearerToken */
router.get("/me", protect, getMe);

module.exports = router;
