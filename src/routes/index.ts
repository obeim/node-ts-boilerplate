import { Express } from "express";
import userRouter from "./user";
import authRouter from "./auth";
export default function routes(
  app: Express,
  express: Express,
  redisClient: any
) {
  app.use("/api/v1/users", () => userRouter(express, redisClient));
  app.use("/api/v1/login", () => authRouter(express, redisClient));
}
