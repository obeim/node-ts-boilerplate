// src/index.ts
import "reflect-metadata";
import express from "express";
import expressConfig from "./server";
import config from "./config/config";
import errorHandlingMiddleware from "./middlewares/errorHandling";
import connection from "./config/redis";
import routes from "./routes";
import { AppDataSource } from "./db/data-source";

const app = express();

expressConfig(app);

AppDataSource.initialize()
  .then(async () => {
    console.log("database connected");
  })
  .catch((error) => console.log(error));

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});

//  connect to db
const redisClient = connection(config).redisClient;

export type RedisClientType = typeof redisClient;

routes(app, redisClient);

app.use(errorHandlingMiddleware);
