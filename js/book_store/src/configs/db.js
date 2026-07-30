import { env } from "./env.js";
import { Pool } from "pg";

export const pool = new Pool({
  user: env.db.user,
  host: env.db.host,
  password: env.db.password,
  port: env.db.port,
  database: env.db.name,
});
