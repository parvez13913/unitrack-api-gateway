import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.get('/', AcademicFacultyController.getAllAcademicFaculties);

router.get('/:id', AcademicFacultyController.getSingleAcademicFaculty);

router.post('/', AcademicFacultyController.createAcademicFaculty);

router.patch('/:id', AcademicFacultyController.updateAcademicFaculty);

export const AcademicFacultyRoutes = router;
