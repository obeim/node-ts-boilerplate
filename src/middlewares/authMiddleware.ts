import { RequestHandler } from "express";
import { verify } from "../helpers";

const authMiddleware: RequestHandler = (req, res, next) => {
  // Get token from header
  const token = req.header("Authorization");
  if (!token) {
    throw new Error("No access token found");
  }
  if (token.split(" ")[0] !== "Bearer") {
    throw new Error("Invalid access token format");
  }
  try {
    const decoded = verify(token.split(" ")[1]);
    (req as any).user = decoded;
    next();
  } catch (err) {
    throw new Error("Token is not valid");
  }
};

export default authMiddleware;
