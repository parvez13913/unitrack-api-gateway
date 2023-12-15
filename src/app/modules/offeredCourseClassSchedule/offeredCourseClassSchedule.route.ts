import express from 'express';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';

const router = express.Router();

router.get('/', OfferedCourseClassScheduleController.getAllOfferedCourseClassSchedules);

router.get('/:id', OfferedCourseClassScheduleController.getSingleOfferedCourseClassSchedule);

router.post('/', OfferedCourseClassScheduleController.createOfferedCourseClassSchedule);

export const OfferedCourseClassScheduleRoutes = router;
