import { Request, Response } from "express";
import userService from "../services/user";
import { RedisClientType } from "..";
import { RequestWithDecodedToken } from "../types/express";

const userController = (redisClient: RedisClientType) => {
  const service = userService();

  const getUsers = async (req: Request, res: Response) => {
    const users = await service.getUsers();
    await redisClient.set(`users_`, JSON.stringify(users), { EX: 30 });
    res.json(users);
  };

  const getUserById = async (req: Request, res: Response) => {
    const user = await service.getUserById(req.params.id);
    await redisClient.set(`user_${req.params.id}`, JSON.stringify(user), {
      EX: 30,
    });

    res.json(user);
  };

  const getCurrentUser = async (req: Request, res: Response) => {
    const requestDecoded = req as RequestWithDecodedToken;
    const user = await service.getUserById(requestDecoded.user.id);
    await redisClient.set(
      `user_${requestDecoded.user.id}`,
      JSON.stringify(user),
      {
        EX: 30,
      }
    );

    res.json(user);
  };

  const createUser = async (req: Request, res: Response) => {
    const user = await service.createUser(req.body);
    res.json(user);
  };

  return { getUserById, createUser, getUsers, getCurrentUser };
};

export default userController;
