import express from 'express';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';

const router = express.Router();

router.get('/', StudentEnrolledCourseController.getAllStudentEnrolledCourses);

router.get('/:id', StudentEnrolledCourseController.getSingleStudentEnrolledCourse);

router.post('/', StudentEnrolledCourseController.createStudentEnrolledCourse);

export const StudentEnrolledCourseRoutes = router;
