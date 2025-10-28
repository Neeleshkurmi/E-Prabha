import Student from "../models/Student.js";
import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Create new admin
    const newAdmin = new Admin({ name, email, password, role });
    await newAdmin.save();

    // Optionally omit password from response
    const { password: _, ...adminData } = newAdmin.toObject();

    res.status(201).json({ message: "Admin registered successfully", admin: adminData });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error during signup" });
  }
};


// Login function (student/admin)
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Student.findOne({ email });
    let role = "student";

    if (!user) {
      user = await Admin.findOne({ email });
      role = "admin";
    }

    if (!user) return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ 
      message: "Login successful", 
      token, 
      user: { id: user._id, fullName: user.name, role } 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
