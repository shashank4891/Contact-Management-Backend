const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  try {
    let token;
    let authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];

      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          res.status(401);
          return res.json({ message: "User is not authorized" });
        }
        req.user = decoded.user;
        next();
      });
    } else {
      res.status(401);
      return res.json({
        message: "Authorization header is missing or invalid",
      });
    }
  } catch (error) {
    console.error("Error in token validation middleware:", error);
    next(error); // Pass the error to the Express error handler
  }
});

module.exports = validateToken;
