const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");

/* REST Standard */

/* /api/users */
router.post("/", registerUser);

router.post("/login", loginUser);

module.exports = router;
