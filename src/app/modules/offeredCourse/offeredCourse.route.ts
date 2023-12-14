import express from 'express';
import { OfferedCourseController } from './offeredCourse.controller';

const router = express.Router();

router.get('/', OfferedCourseController.getAllOfferedCourses);

router.get('/:id', OfferedCourseController.getSingleOfferedCourse);

router.post('/', OfferedCourseController.createOfferedCourse);

export const OfferedCourseRoutes = router;
