import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.send({ error: "Access denied" });
  try {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const decoded = jwt.verify(token, jwtSecretKey);
    req.userId = decoded.id
    res.setHeader('Authorization', token);
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

export default verifyToken
