import { Router } from "express";
import userController from "../controllers/user";
import redisCachingMiddleware from "../middlewares/redisCaching";
import { RedisClientType } from "..";
import authMiddleware from "../middlewares/authMiddleware";
import validateMiddleware from "../middlewares/validateMiddleware";
import { createUserSchema } from "../helpers/validations";

const userRouter = (redisClient: RedisClientType) => {
  const router = Router();
  const controller = userController(redisClient);

  /// routes
  router.get(
    "/",
    [authMiddleware, redisCachingMiddleware(redisClient, "users")],
    controller.getUsers
  );
  router.get(
    "/:id",
    [authMiddleware, redisCachingMiddleware(redisClient, "user")],
    controller.getUserById
  );

  router.delete("/:id", [authMiddleware], controller.deleteUser);

  router.get(
    "/profile",
    [authMiddleware, redisCachingMiddleware(redisClient, "user")],
    controller.getCurrentUser
  );

  router.post(
    "/",
    [authMiddleware, validateMiddleware(createUserSchema)],
    controller.createUser
  );

  ///
  return router;
};

export default userRouter;
