import { Express } from "express";
import userRouter from "./user";
import authRouter from "./auth";
import { RedisClientType } from "../types/redis";
export default function routes(app: Express, redisClient: RedisClientType) {
  app.use("/api/v1/users", userRouter(redisClient));
  app.use("/api/v1/login", authRouter(redisClient));
}
