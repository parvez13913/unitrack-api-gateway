import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/', AcademicDepartmentController.getAllAcademicDepartments);

router.get('/:id', AcademicDepartmentController.getSingleAcademicDepartment);

router.post(
  '/',
  validateRequest(AcademicDepartmentValidation.createAcademicDepartmentZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.createAcademicDepartment
);

router.patch(
  '/:id',
  validateRequest(AcademicDepartmentValidation.updateAcademicDepartmentZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.updateAcademicDepartment
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.deleteAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
