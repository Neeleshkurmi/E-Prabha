import express from "express";
import { bulkUploadCertificates } from "../controllers/adminController.js";
import upload from "../utils/upload.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin can upload multiple certificates
router.post(
  "/upload",
  verifyToken,
  upload.array("files"),
  bulkUploadCertificates
);

export default router;
