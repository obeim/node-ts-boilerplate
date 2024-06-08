import { Express, Router } from "express";
import authController from "../controllers/auth";

const authRouter = (redisClient: any) => {
  const controller = authController(redisClient);
  const router = Router();
  router.get("/", controller.login);
  return router;
};
export default authRouter;
