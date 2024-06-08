import { Config } from "../../config/config";
import { createClient } from "redis";
export default function connection(config: Config) {
  const createRedisClient = function createRedisClient() {
    return createClient({ url: config.redis.uri });
  };
  createRedisClient().on("connect", () => {
    console.log("Connected to Redis!");
  });

  createRedisClient().on("error", (err) => {
    console.log(`Error  ${err}`);
  });

  return {
    createRedisClient,
  };
}
