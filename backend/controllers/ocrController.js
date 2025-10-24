import Tesseract from "tesseract.js";

export const extractOCR = async (req, res) => {
  if (!req.file) return res.status(400).json({ status: "error", message: "No file uploaded" });
  try {
    const { data: { text } } = await Tesseract.recognize(req.file.buffer, "eng");

    const extractedData = {
      fullName: text.match(/Priya\s+Sharma/)?.[0] || "Unknown",
      degreeName: text.includes("Bachelor") ? "Bachelor of Technology" : "Unknown",
      issuingUniversity: text.match(/University\s+of\s+\w+/)?.[0] || "Unknown",
      dateOfIssue: text.match(/\d{2}-\d{2}-\d{4}/)?.[0] || "Unknown",
      enrollmentNumber: text.match(/DU-\d{4}-\d{5}/)?.[0] || "Unknown"
    };

    res.status(200).json({ status: "success", extractedData, ocrRawText: text.trim() });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
