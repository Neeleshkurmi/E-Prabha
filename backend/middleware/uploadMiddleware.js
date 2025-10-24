import multer from "multer";

const storage = multer.memoryStorage(); // store file in memory (not disk)
const upload = multer({ storage });

export default upload;
