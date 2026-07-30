import {
  register as registerUser,
  login as loginUser,
} from "../services/auth.service.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/jwt.util.js";

export async function register(req, res, next) {
  try {
    const safeUser = await registerUser(req.body);
    res.status(201).json(safeUser);
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const result = await loginUser(req.body);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
