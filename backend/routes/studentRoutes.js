import express from "express";
import { getStudentProfile, getCertificates } from "../controllers/studentController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { isStudent } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Get logged-in student profile
router.get("/profile", verifyToken, isStudent, getStudentProfile);

// Get all certificates linked to student
router.get("/certificates", verifyToken, isStudent, getCertificates);

export default router;
