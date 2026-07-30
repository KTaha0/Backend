import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../models/users.model.js";
import { ConflictError } from "../errors/ConflictError.js";
import { UnauthorizedError } from "../errors/UnauthorizedError.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.util.js";

export async function register(data) {
  const { name, email, phone, password } = data;
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new ConflictError("Email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser({
    name: name,
    email: email,
    phone: phone,
    password: hashedPassword,
  });
  const { password: _, ...safeUser } = user;
  return safeUser;
}

export async function login(data) {
  const { email, password } = data;
  const existingUser = await findUserByEmail(email);
  if (!existingUser) {
    throw new UnauthorizedError("Email or password is wrong");
  }

  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) {
    throw new UnauthorizedError("Email or password is wrong");
  }

  const { password: _, ...safeUser } = existingUser;
  const accessToken = generateAccessToken({
    id: safeUser.id,
    role: safeUser.role,
  });
  const refreshToken = generateRefreshToken({
    id: safeUser.id,
  });

  return {
    user: safeUser,
    accessToken,
    refreshToken,
  };
}
