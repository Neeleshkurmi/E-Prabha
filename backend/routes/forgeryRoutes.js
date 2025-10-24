import express from "express";
import { detectForgery } from "../controllers/forgeryController.js";
import upload from "../utils/upload.js";

const router = express.Router();
router.post("/forgery", upload.single("file"), detectForgery);

export default router;
