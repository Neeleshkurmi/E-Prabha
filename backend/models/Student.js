import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  phone: { type: String },
  rollNumber: { type: String, unique: true, sparse: true },
  branch: { type: String },
  year: { type: Number },
  address: { type: String },
  dateOfBirth: { type: Date },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  createdAt: { type: Date, default: Date.now },
});

// Password hash
studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

studentSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("Student", studentSchema);
