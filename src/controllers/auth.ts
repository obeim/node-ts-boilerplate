import { Response, Request } from "express";

const authController = (redisClient: any) => {
  const login = (req: Request, res: Response) => {
    res.send("Hello World");
  };
  return { login };
};

export default authController;
