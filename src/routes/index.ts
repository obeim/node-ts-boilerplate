import { Express } from "express";
import userRouter from "./user";
import authRouter from "./auth";
export default function routes(app: Express, redisClient: any) {
  app.use("/api/v1/users", userRouter(redisClient));
  app.use("/api/v1/login", authRouter(redisClient));
}
