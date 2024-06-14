import { Router } from "express";
import userController from "../controllers/user";
import { RedisClientType } from "../types/redis";

const userRouter = (redisClient: RedisClientType) => {
  const router = Router();
  const controller = userController(redisClient);

  /// routes
  router.get("/:id", controller.getUserById);
  router.post("/", controller.createUser);

  ///
  return router;
};

export default userRouter;
