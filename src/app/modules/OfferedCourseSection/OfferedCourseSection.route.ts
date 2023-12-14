import express from 'express';
import { OfferedCourseSectionController } from './OfferedCourseSection.controller';

const router = express.Router();

router.get('/', OfferedCourseSectionController.getAllOfferedCourseSections);

router.post('/', OfferedCourseSectionController.createOfferedCourseSection);

export const OfferedCourseSectionRoutes = router;
