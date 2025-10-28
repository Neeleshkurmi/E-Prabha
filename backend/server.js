import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import ocrRoutes from "./routes/ocrRoutes.js";
import forgeryRoutes from "./routes/forgeryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import verifyRoutes from "./routes/verifyRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); // test done
app.use("/api/student", studentRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/ocr", ocrRoutes);
app.use("/api/detect", forgeryRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api", verifyRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
