import { Response, Request } from "express";

const userController = {
  getUserById: (req: Request, res: Response) => {
    res.send("Hello World");
  },
  createUser: (req: Request, res: Response) => {
    res.send("Hello World");
  },
};

export default userController;
