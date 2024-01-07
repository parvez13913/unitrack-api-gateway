import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { StudentValidation } from './student.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/', StudentController.getAllStudents);

router.get('/profile/:id', StudentController.getStudentProfile);

router.get('/myCourses', auth(ENUM_USER_ROLE.STUDENT), StudentController.getMyCourses);

router.get('/myAcademicInfo', auth(ENUM_USER_ROLE.STUDENT), StudentController.getMyAcademicInfos);

router.get(
  '/myCoursesSchedules',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentController.getMyCourseSchedules
);

router.get('/:id', StudentController.getSingleStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.updateStudent
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.deleteStudent
);

export const StudentRoutes = router;
