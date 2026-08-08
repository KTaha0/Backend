import { pool } from "../configs/db.js";

export async function findAllBooks(options) {
  const {
    sort,
    search,
    minPrice,
    maxPrice,
    order = "DESC",
    page = 1,
    limit = 10,
  } = options;

  console.log({ sort, order });

  const offset = (page - 1) * limit;
  const values = [];

  let query = `
    SELECT *
    FROM books
    WHERE 1=1
`;

  if (minPrice) {
    values.push(minPrice);
    query += ` AND price >= $${values.length}`;
  }
  if (maxPrice) {
    values.push(maxPrice);
    query += ` AND price <= $${values.length}`;
  }
  if (search) {
    values.push(`%${search}%`);
    query += ` AND title ILIKE $${values.length}`;
  }

  if (sort) {
    const allowedSorts = {
      title: "title",
      price: "price",
      created_at: "created_at",
    };
    const sortColumn = allowedSorts[sort] || "title";
    const direction = order.toUpperCase() === "DESC" ? "DESC" : "ASC";
    query += ` ORDER BY ${sortColumn} ${direction}`;
  }

  if (limit) {
    values.push(limit);
    query += ` LIMIT $${values.length}`;
  }
  if (offset) {
    values.push(offset);
    query += ` OFFSET $${values.length}`;
  }

  const result = await pool.query(query, values);
  return result.rows;
}
