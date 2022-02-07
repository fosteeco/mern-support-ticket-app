/* A function that we use to protect routes */
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  /* Token is sent with BearerToken */
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token =
        req.headers.authorization.split(
          " "
        )[1]; /* Will turn it  into an array where Bearer is the first item and the token is the second */

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token
      req.user = await User.findById(decoded.id).select(
        "-password"
      ); /* When we assigned the token, we put the user Id inside of it, select(-password) will exluced the password from the data  */
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});

module.exports = { protect };
