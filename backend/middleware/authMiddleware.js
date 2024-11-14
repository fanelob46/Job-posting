import jwt from "jsonwebtoken";
import User from "../models/userModel.js";


//protect routes ensure that you have to be logged in for certain routes
const protect = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({message:"Not authorized, token failed"})
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export { protect };
