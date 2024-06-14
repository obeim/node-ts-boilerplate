import { Request, Response } from "express";
import userService from "../services/user";
import { RedisClientType } from "..";

const userController = (redisClient: RedisClientType) => {
  const service = userService();

  const getUserById = async (req: Request, res: Response) => {
    const user = await service.getUserById(req.params.id);
    await redisClient.set("posts", JSON.stringify(user), { EX: 30 });

    res.json(user);
  };

  const createUser = async (req: Request, res: Response) => {
    const user = await service.createUser(req.body);
    res.json(user);
  };

  return { getUserById, createUser };
};

export default userController;
