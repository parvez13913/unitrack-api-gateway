import express from 'express';
import { FacultyController } from './faculty.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/', FacultyController.getAllFaculties);

router.get('/myCourses', FacultyController.getMyCourses);

router.get('/:id', FacultyController.getSingleFaculty);

router.get('/myCourseStudents', FacultyController.getMyCourseStudents);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FacultyController.updateFaculty
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FacultyController.deleteFaculty
);

export const FacultyRoutes = router;
