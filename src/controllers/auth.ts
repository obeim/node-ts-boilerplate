import { Response, Request } from "express";

const authController = {
  login: (req: Request, res: Response) => {
    res.send("Hello World");
  },
};

export default authController;
