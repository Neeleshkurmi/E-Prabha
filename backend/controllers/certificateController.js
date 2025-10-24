import Certificate from "../models/Certificate.js";

export const uploadCertificate = async (req, res) => {
  try {
    const {
      studentId,
      certificateName,
      issuingAuthority,
      issueDate,
      certificateType,
      certificateId,
      fileURL
    } = req.body;

    const cert = new Certificate({
      studentId,
      certificateName,
      issuingAuthority,
      issueDate,
      certificateType,
      certificateId,
      fileURL,
    });

    await cert.save();
    res.status(201).json({ success: true, message: "Certificate uploaded successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
