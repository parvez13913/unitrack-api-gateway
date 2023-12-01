import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllAcademicSemester);
router.post('/', AcademicSemesterController.createAcademicSemester);

export const AcademicSemesterRoutes = router;
