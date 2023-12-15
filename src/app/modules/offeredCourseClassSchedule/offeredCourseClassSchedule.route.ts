import express from 'express';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseClassScheduleValidation } from './offeredCourseClassSchedule.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/', OfferedCourseClassScheduleController.getAllOfferedCourseClassSchedules);

router.get('/:id', OfferedCourseClassScheduleController.getSingleOfferedCourseClassSchedule);

router.post(
  '/',
  validateRequest(OfferedCourseClassScheduleValidation.createOfferedCourseClassSchedule),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.createOfferedCourseClassSchedule
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseClassScheduleValidation.updateOfferedCourseClassSchedule),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.updateOfferedCourseClassSchedule
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleController.deleteOfferedCourseClassSchedule
);

export const OfferedCourseClassScheduleRoutes = router;
