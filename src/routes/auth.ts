import { Router } from "express";
import authController from "../controllers/auth";
import { RedisClientType } from "..";
import validateMiddleware from "../middlewares/validateMiddleware";
import { loginSchema } from "../helpers/validations";

const authRouter = (redisClient: RedisClientType) => {
  const controller = authController(redisClient);
  const router = Router();

  /// routes
  router.post("/", validateMiddleware(loginSchema), controller.login);
  ///
  return router;
};
export default authRouter;
