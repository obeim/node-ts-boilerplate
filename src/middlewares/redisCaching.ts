import { NextFunction, Request, Response } from "express";
import { RedisClientType } from "..";

export default function redisCachingMiddleware(
  redisClient: RedisClientType,
  key: string
) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const params = req.params.id || "";
    const data = await redisClient.get(`${key}_${params}`);
    if (data) {
      return res.json(JSON.parse(data));
    } else {
      return next();
    }
  };
}
