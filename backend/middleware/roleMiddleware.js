export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Admin access required" });
  next();
};

export const isStudent = (req, res, next) => {
  if (req.user.role !== "student") return res.status(403).json({ message: "Student access required" });
  next();
};
