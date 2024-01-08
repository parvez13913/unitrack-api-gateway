import express from 'express';
import { ManagementDepartmentController } from './managementDepartment.controller';

const router = express.Router();

router.get('/', ManagementDepartmentController.getAllDepartments);

router.get('/:id', ManagementDepartmentController.getSingleDepartment);

router.post('/', ManagementDepartmentController.createDepartment);

router.patch('/:id', ManagementDepartmentController.updateDepartment);

export const ManagementDepartmentRoutes = router;
