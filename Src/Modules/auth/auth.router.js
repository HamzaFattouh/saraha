import { Router } from "express";
const router = Router();
import * as AuthController from './auth.controller.js';
router.post('/Register',AuthController.register);
router.post('/Login',AuthController.login);
export default router;