import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.js";
import { loginSchema, registerSchema } from "../validators/auth.validator.js";

const router = Router();

router.post("/login", validate({ body: loginSchema }), login);
router.post(
  "/register",
  validate({
    body: registerSchema,
  }),
  register,
);

export default router;
