import Certificate from "../models/Certificate.js";
import OCRJob from "../models/OCRJob.js";
import upload from "../utils/upload.js";

export const bulkUploadCertificates = async (req, res) => {
  if (!req.files || req.files.length === 0)
    return res.status(400).json({ message: "No files uploaded" });

  try {
    let successful = 0;
    let failed = 0;
    const batchId = `batch_${Date.now()}`;

    for (let file of req.files) {
      try {
        const cert = await Certificate.create({
          studentId: req.body.studentId, // frontend must send studentId
          certificateName: file.originalname,
          fileURL: `/uploads/${file.originalname}`,
          certificateId: `CERT-${Date.now()}-${Math.floor(Math.random()*1000)}`
        });

        await OCRJob.create({
          certificateId: cert._id,
          fileURL: cert.fileURL,
          status: "queued"
        });

        successful++;
      } catch (err) {
        failed++;
      }
    }

    res.status(200).json({
      message: `Processing started for ${req.files.length} certificates.`,
      batchId,
      results: { successful, failed }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
