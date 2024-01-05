import express from 'express';
import { AuthenticationController } from './auth.controller';

const router = express.Router();

router.post('/login', AuthenticationController.loginUser);

router.post('/refreshToken', AuthenticationController.refreshToken);

export const AuthenticationRoutes = router;
