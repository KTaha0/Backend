import jwt from "jsonwebtoken";
import { env } from "../configs/env.js";

export function generateAccessToken(payload) {
  return jwt.sign(payload, env.jwt.accessSecret, {
    expiresIn: env.jwt.accessExpire,
  });
}

export function generateRefreshToken(payload) {
  return jwt.sign(payload, env.jwt.refreshSecret, {
    expiresIn: env.jwt.refreshExpire,
  });
}

export function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}
