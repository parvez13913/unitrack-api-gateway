import express from 'express';
import { FacultyController } from './faculty.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();

router.get('/', FacultyController.getAllFaculties);

router.get('/profile/:id', FacultyController.getFacultyProfile);

router.get('/myCourses', auth(ENUM_USER_ROLE.FACULTY), FacultyController.getMyCourses);

router.get('/:id', FacultyController.getSingleFaculty);

router.get(
  '/myCourseStudents',
  auth(ENUM_USER_ROLE.FACULTY),
  FacultyController.getMyCourseStudents
);

router.patch(
  '/:id',
  validateRequest(FacultyValidation.updateFacultyZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FacultyController.updateFaculty
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FacultyController.deleteFaculty
);

export const FacultyRoutes = router;
