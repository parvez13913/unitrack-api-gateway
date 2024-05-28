import express from 'express';
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseMarkValidation } from './studentEnrolledCourseMark.validation';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', StudentEnrolledCourseMarkController.getAllStudentEnrolledCourseMarks);

router.get('/myMarks', StudentEnrolledCourseMarkController.getMyCourseMarks);

router.post(
  '/updateMarks',
  auth(ENUM_USER_ROLE.FACULTY),
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarks),
  StudentEnrolledCourseMarkController.updateStudentMarks
);

router.post(
  '/updateFinalMarks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentCourseFinalMarks),
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateFinalMarks
);

export const StudentEnrolledCourseMarkRoutes = router;
