import { Request, Response } from "express";
import { RedisClientType } from "../types/redis";
import userService from "../services/user";

const userController = (redisClient: RedisClientType) => {
  const service = userService();

  const getUserById = async (req: Request, res: Response) => {
    const user = await service.getUserById(req.params.id);
    res.json(user);
  };

  const createUser = async (req: Request, res: Response) => {
    const user = await service.createUser(req.body);
    res.json(user);
  };

  return { getUserById, createUser };
};

export default userController;
