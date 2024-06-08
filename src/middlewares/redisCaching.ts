import { NextFunction, Request, Response } from "express";
import { ErrorReply } from "redis";

export default function redisCachingMiddleware(redisClient: any, key: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    const params = req.params.id || "";
    redisClient.get(`${key}_${params}`, (err: ErrorReply, data: string) => {
      if (err) {
        console.log(err);
      }
      if (data) {
        return res.json(JSON.parse(data));
      }
      return next();
    });
  };
}
