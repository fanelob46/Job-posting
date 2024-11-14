import User from "../models/userModel.js";

export const registerUser = async (req,res) => {
    const {name, email, password} = req.body;

    //check if the user exist
    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400).json({succes:false, message: "User already Exist"});
    }

    //create a user
    const user = await User.create({
        name,
        email,
        password
    })
    
    //check if the user was created
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }else {
        res.status(400).json({message:"invalid user data"})
    }
}