import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  //check if the user exist
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ succes: false, message: "User already Exist" });
  }

  //create a user
  const user = await User.create({
    name,
    email,
    password,
  });

  //check if the user was created
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json({ message: "invalid user data" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401).json({ succes:fals,message: "Invalid login details" });
  }
};

export const logoutUser = async (req,res) =>{
    res.cookie("jwt","" ,{
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({message : "User logged out"})
}
