import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ✅ LOGIN CONTROLLER
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, error: "Wrong password" });
    }

    // Ensure JWT_SECRET is set
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ success: false, error: "JWT_SECRET not configured" });
    }

    // Generate JWT token with role
    const token = jwt.sign(
      { id: user._id, role: user.role },  // ✅ Include role in token
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Store token in HTTP-Only Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure in production
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // Send response
    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// ✅ VERIFY USER CONTROLLER
const verify = async (req, res) => {
  try {
    const token = req.cookies.token || req.header("Authorization")?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ success: false, error: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.status(200).json({ success: true, user });

  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ success: false, error: "Invalid token" });
  }
};

export { login, verify };
