import jwt from "jsonwebtoken";

export function generateToken(data) {
  try {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign(data, jwtSecretKey);
    return token;
  } catch (err) {
    logger.error(err);
    throw new Error(messages.authMessage.NotGenerateToken);
  }
}