import express from 'express';
import { CourseController } from './course.controller';

const router = express.Router();

router.get('/', CourseController.getAllCourses);

router.post('/', CourseController.createCourse);

export const CourseRoutes = router;
