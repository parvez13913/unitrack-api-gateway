import express from 'express';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseValidation } from './studentEnrolledCourse.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/', StudentEnrolledCourseController.getAllStudentEnrolledCourses);

router.get('/:id', StudentEnrolledCourseController.getSingleStudentEnrolledCourse);

router.post(
  '/',
  validateRequest(StudentEnrolledCourseValidation.createStudentEnrolledCourseZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.createStudentEnrolledCourse
);

router.patch(
  '/:id',
  validateRequest(StudentEnrolledCourseValidation.updateStudentEnrolledCourseZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.updateStudentEnrolledCourse
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseController.deleteStudentEnrolledCourse
);

export const StudentEnrolledCourseRoutes = router;
