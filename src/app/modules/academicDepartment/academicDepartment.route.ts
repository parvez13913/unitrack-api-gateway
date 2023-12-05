import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.get('/', AcademicDepartmentController.getAllAcademicDepartments);

router.post('/', AcademicDepartmentController.createAcademicDepartment);

export const AcademicDepartmentRoutes = router;
