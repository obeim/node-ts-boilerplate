import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import config from "../config/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.db.host,
  port: parseInt(config.db.port || "5432"),
  username: config.db.user,
  password: config.db.password,
  database: config.db.name,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [
    config.env === "production"
      ? "dist/db/migration/*{.ts,.js}"
      : "src/db/migration/**/*.ts",
  ],
});
