import express from 'express';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';

const router = express.Router();

router.post('/', StudentEnrolledCourseController.createStudentEnrolledCourse);

export const StudentEnrolledCourseRoutes = router;
