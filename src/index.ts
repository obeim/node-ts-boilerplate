// src/index.ts
import express from "express";
import expressConfig from "./server";
import config from "./config/config";
import errorHandlingMiddleware from "./middlewares/errorHandling";
import connection from "./db/redis/connection";
import routes from "./routes";

const app = express();

expressConfig(app);

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});

//  connect to db
const redisClient = connection(config).createRedisClient();

routes(app, redisClient);

app.use(errorHandlingMiddleware);
