import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { email, password, fullName } = req.body;
  try {
    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists, please use a different one" });
    }

    const idx = Math.floor(Math.random() * 100) + 1;
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

    const newUser = await User.create({
      fullName,
      email,
      password,
      profilePic: randomAvatar,
    });


    // TODO: Create the user in stream as well

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '3d' });
    console.log( "token", token);
    

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });

    res.status(201).json({success: true, message: "User created successfully", user: newUser});

  } catch (error) {
    console.error("Error in signup controller :", error);
    res.status(500).json({ message: "Internal server error" }); 
  }

};

export const login = async (req, res) => {
  res.send("Login route: Authenticate a user");
};

export async function logout(req, res) {
  res.send("Logout Route")
}