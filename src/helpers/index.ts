import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config";

const encryptPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const compare = (password: string, hashedPassword: string) =>
  bcrypt.compareSync(password, hashedPassword);

const verify = (token: string) => jwt.verify(token, config.jwtSecret);

const generateToken = (payload: any) =>
  jwt.sign(payload, config.jwtSecret, {
    expiresIn: 360000,
  });

export default {
  encryptPassword,
  compare,
  verify,
  generateToken,
};
