import Student from "../models/Student.js";
import Certificate from "../models/Certificate.js";

// Get logged-in student profile
export const getStudentProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select("-password");
    if (!student) return res.status(404).json({ message: "Student not found" });

    const certificates = await Certificate.find({ studentId: student._id }).select(
      "certificateId certificateName degreeName issuingAuthority issueDate verificationStatus"
    );

    res.status(200).json({
      profile: student,
      certificates
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get only certificates list
export const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find({ studentId: req.user.id }).select(
      "certificateId certificateName degreeName issuingAuthority issueDate verificationStatus"
    );

    res.status(200).json({ certificates });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
