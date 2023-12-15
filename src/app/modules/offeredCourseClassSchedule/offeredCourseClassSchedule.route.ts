import express from 'express';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';

const router = express.Router();

router.get('/', OfferedCourseClassScheduleController.getAllOfferedCourseClassSchedules);

router.post('/', OfferedCourseClassScheduleController.createOfferedCourseClassSchedule);

export const OfferedCourseClassScheduleRoutes = router;
