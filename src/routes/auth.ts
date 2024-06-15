import { Router } from "express";
import authController from "../controllers/auth";
import { RedisClientType } from "..";

const authRouter = (redisClient: RedisClientType) => {
  const controller = authController(redisClient);
  const router = Router();

  /// routes
  router.get("/", controller.login);
  ///
  return router;
};
export default authRouter;
