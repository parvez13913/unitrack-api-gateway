import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.get('/', AcademicDepartmentController.getAllAcademicDepartments);

router.get('/:id', AcademicDepartmentController.getSingleAcademicDepartment);

router.post('/', AcademicDepartmentController.createAcademicDepartment);

router.patch('/:id', AcademicDepartmentController.updateAcademicDepartment);

router.delete('/:id', AcademicDepartmentController.deleteAcademicDepartment);

export const AcademicDepartmentRoutes = router;
