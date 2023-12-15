import express from 'express';
import { OfferedCourseSectionController } from './OfferedCourseSection.controller';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseSectionValidation } from './OfferedCourseSection.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/', OfferedCourseSectionController.getAllOfferedCourseSections);

router.get('/:id', OfferedCourseSectionController.getSingleOfferedCourseSection);

router.post(
  '/',
  validateRequest(OfferedCourseSectionValidation.createOfferedCourseSectionZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseSectionController.createOfferedCourseSection
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseSectionValidation.updateOfferedCourseSectionZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseSectionController.updateOfferedCourseSection
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseSectionController.deleteOfferedCourseSection
);

export const OfferedCourseSectionRoutes = router;
