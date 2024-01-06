import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.get('/', StudentController.getAllStudents);

router.get('/:id', StudentController.getSingleStudent);

export const StudentRoutes = router;
