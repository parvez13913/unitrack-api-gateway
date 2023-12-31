import express, { NextFunction, Request, Response } from 'express';
import { UsersController } from './user.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/createStudent',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createStudentZodSchema.parse(JSON.parse(req.body.data));

    return UsersController.createStudent(req, res, next);
  }
);

export const UserRoutes = router;
