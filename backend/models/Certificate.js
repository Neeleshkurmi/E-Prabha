import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  certificateName: { type: String, required: true },
  issuingAuthority: { type: String, required: true },
  issueDate: { type: Date, required: true },
  degreeName: { type: String }, // Optional if structured
  certificateId: { type: String, required: true, unique: true },
  fileURL: { type: String, required: true },
  verificationStatus: { type: String, enum: ["Pending", "Verified", "Rejected"], default: "Pending" },
  verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  verifiedAt: { type: Date },
  blockchainHash: { type: String }, 
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Certificate", certificateSchema);
