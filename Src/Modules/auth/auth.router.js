import { Router } from "express";
const router = Router();
import * as AuthController from './auth.controller.js';
import validation from "../../Middleware/validation.js";
import { registerSchema } from "./auth.validation.js";

router.post('/Register',validation(registerSchema),AuthController.register);
router.post('/Login',AuthController.login);
export default router;