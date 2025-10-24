import express from "express";
import { verifyCertificate } from "../controllers/verifyController.js";

const router = express.Router();
router.post("/verify", verifyCertificate);

export default router;
