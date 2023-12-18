import express from 'express';
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';

const router = express.Router();

router.patch('/updateMarks', StudentEnrolledCourseMarkController.updateStudentMarks);

export const StudentEnrolledCourseMarkRoutes = router;
