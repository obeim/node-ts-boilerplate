import { Response, Request } from "express";
import { RedisClientType } from "../types/redis";
import { AppDataSource } from "../db/data-source";
import { User } from "../db/entity/User";

const authController = (redisClient: RedisClientType) => {
  const login = (req: Request, res: Response) => {};
  return { login };
};

export default authController;
