import { Config } from "./config";
import { createClient } from "redis";
export default function connection(config: Config) {
  const redisClient = createClient({ url: config.redis.uri });

  redisClient.connect();

  redisClient.on("connect", () => {
    console.log("Connected to Redis!");
  });

  redisClient.on("error", (err) => {
    console.log(`Error  ${err}`);
  });

  return {
    redisClient,
  };
}
