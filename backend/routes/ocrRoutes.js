import express from "express";
import { extractOCR } from "../controllers/ocrController.js";
import upload from "../utils/upload.js";

const router = express.Router();
router.post("/extract", upload.single("file"), extractOCR);

export default router;
