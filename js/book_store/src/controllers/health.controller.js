import { pool } from "../configs/db.js";

export async function healthCheck(req, res, next) {
  try {
    await pool.query("SELECT NOW()");

    res.status(200).json({
      status: "OK",
      database: "connected",
    });
  } catch (err) {
    next(err);
  }
}
