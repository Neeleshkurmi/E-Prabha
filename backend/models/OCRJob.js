import mongoose from "mongoose";

const ocrJobSchema = new mongoose.Schema({
  certificateId: { type: mongoose.Schema.Types.ObjectId, ref: "Certificate" },
  fileURL: { type: String },
  status: { type: String, enum: ["queued", "processing", "done", "failed"], default: "queued" },
  attempts: { type: Number, default: 0 },
  ocrRawText: { type: String },
  extractedData: { type: mongoose.Schema.Types.Mixed },
  error: { type: String },
  startedAt: { type: Date },
  finishedAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("OCRJob", ocrJobSchema);
