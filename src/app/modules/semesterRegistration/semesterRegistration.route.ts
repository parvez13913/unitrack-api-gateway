import express from 'express';
import { SemesterRegistrationController } from './semesterRegistration.controller';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get(
  '/getMyRegistration',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.getMyRegistration
);

router.get(
  '/getMySemesterCourses',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.getMySemesterRegistrationCourses
);

router.get('/', SemesterRegistrationController.getAllSemesterRegistrations);

router.get('/:id', SemesterRegistrationController.getSingleSemesterRegistration);

router.post(
  '/',
  validateRequest(SemesterRegistrationValidation.createSemesterRegistrationZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationController.createSemesterRegistration
);

router.post(
  '/enrollIntoCourse',
  validateRequest(SemesterRegistrationValidation.inrollCourseZodSchema),
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.startMySemesterRegistration
);

router.post(
  '/startRegistration',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.startMySemesterRegistration
);

router.post(
  '/withdrawFromCourse',
  validateRequest(SemesterRegistrationValidation.withdrawCourseZodSchema),
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.withdrewFromCourse
);

router.post(
  '/confirmMyRegistration',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationController.confirmMyRegistration
);

router.post(
  '/:id/startNewSemester',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationController.startNewSemester
);

router.patch(
  '/:id',
  validateRequest(SemesterRegistrationValidation.updateSemesterRegistrationZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationController.updateSemesterRegistration
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationController.deleteSemesterRegistration
);

export const SemesterRegistrationRoutes = router;
