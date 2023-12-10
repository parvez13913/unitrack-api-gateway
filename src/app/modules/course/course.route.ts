import express from 'express';
import { CourseController } from './course.controller';

const router = express.Router();

router.get('/', CourseController.getAllCourses);
router.get('/:id', CourseController.getSingleCourse);

router.post('/', CourseController.createCourse);

export const CourseRoutes = router;
