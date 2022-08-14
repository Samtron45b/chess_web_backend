import express from 'express';
import userController from '../controller/user.controller.js';

const router = express.Router();
router.post('/register', userController.Register);
router.post("/login", userController.Login);
export default router;

