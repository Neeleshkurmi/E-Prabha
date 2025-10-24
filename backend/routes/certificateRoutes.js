import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { isStudent } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Placeholder route
router.get("/", verifyToken, isStudent, (req, res) => {
  res.json({ message: "Certificate route is working!" });
});

export default router;
