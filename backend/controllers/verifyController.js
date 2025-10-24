import Certificate from "../models/Certificate.js";

export const verifyCertificate = async (req, res) => {
  const { certificateId, documentHash } = req.body;
  try {
    const cert = await Certificate.findOne({ certificateId });
    if (!cert) return res.status(404).json({ verificationStatus: "NOT_FOUND", message: "No certificate found with the given ID.", verifiedAt: new Date() });

    if (cert.blockchainHash === documentHash) {
      return res.status(200).json({
        verificationStatus: "AUTHENTIC",
        certificateDetails: {
          fullName: cert.fullName,
          degreeName: cert.degreeName,
          issuingUniversity: cert.issuingAuthority,
          dateOfIssue: cert.issueDate
        },
        blockchainTxHash: cert.blockchainHash,
        verifiedAt: new Date()
      });
    } else {
      return res.status(200).json({
        verificationStatus: "FAKE",
        message: "The provided hash does not match the blockchain record.",
        verifiedAt: new Date()
      });
    }
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
