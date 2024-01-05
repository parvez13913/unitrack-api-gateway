import express from 'express';
import { AuthenticationController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthenticationValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthenticationValidation.loginZodSchema),
  AuthenticationController.loginUser
);

router.post(
  '/refreshToken',
  validateRequest(AuthenticationValidation.refreshTokenZodSchema),
  AuthenticationController.refreshToken
);

export const AuthenticationRoutes = router;
