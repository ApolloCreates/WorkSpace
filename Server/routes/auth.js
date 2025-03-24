import express from "express";
import { login, verify } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";  // ✅ Correct import

const router = express.Router();

// ✅ Login Route
router.post("/login", login);

// ✅ Verify User Route (should be GET)
router.get("/verify", authMiddleware, verify);  

export default router;
