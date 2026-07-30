import { env } from "./configs/env.js";
import { pool } from "./configs/db.js";
import { app } from "./app.js";

try {
  await pool.query("SELECT NOW()");
  console.log("Database connected.");

  app.listen(env.server.port, () => {
    console.log(`Server listening on port ${env.server.port}`);
  });
} catch (err) {
  console.error("Database connection failed:", err);
  process.exit(1);
}
