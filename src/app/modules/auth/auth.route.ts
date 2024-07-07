import express from 'express';
import { AuthenticationController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthenticationValidation } from './auth.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

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
router.post(
  '/forgotPassword',
  AuthenticationController.forgotPassword
);

router.post(
  '/resetPassword',
  AuthenticationController.resetPassword
);

router.post(
  '/changePassword',
  validateRequest(AuthenticationValidation.changePasswordZodSchema),
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT,
    ENUM_USER_ROLE.SUPER_ADMIN
  ),
  AuthenticationController.changePassword
);

export const AuthenticationRoutes = router;
