import { pool } from "../configs/db.js";

export async function findUserByEmail(email) {
  const result = await pool.query("SELECT * FROM users WHERE email=$1", [
    email,
  ]);
  return result.rows[0];
}

export async function createUser({ name, email, phone, password, role }) {
  const result = await pool.query(
    "INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, email, phone, password],
  );
  return result.rows[0];
}
