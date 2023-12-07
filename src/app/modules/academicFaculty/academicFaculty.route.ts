import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.get('/', AcademicFacultyController.getAllAcademicFaculties);

router.post('/', AcademicFacultyController.createAcademicFaculty);

export const AcademicFacultyRoutes = router;
