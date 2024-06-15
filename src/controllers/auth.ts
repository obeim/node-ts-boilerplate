import { Response, Request } from "express";
import authService from "../services/auth";
import { RedisClientType } from "..";

const authController = (redisClient: RedisClientType) => {
  const login = async (req: Request, res: Response, next: any) => {
    const service = authService();

    try {
      const data = await service.login(req.body.email, req.body.password);
      res.json(data);
    } catch (err) {
      next(err);
    }
  };
  return { login };
};

export default authController;
