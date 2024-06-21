import { Router } from "express";
import userController from "../controllers/user";
import redisCachingMiddleware from "../middlewares/redisCaching";
import { RedisClientType } from "..";

const userRouter = (redisClient: RedisClientType) => {
  const router = Router();
  const controller = userController(redisClient);

  /// routes
  router.get(
    "/",
    redisCachingMiddleware(redisClient, "users"),
    controller.getUsers
  );
  router.get(
    "/:id",
    [redisCachingMiddleware(redisClient, "user")],
    controller.getUserById
  );
  router.post("/", controller.createUser);

  ///
  return router;
};

export default userRouter;
