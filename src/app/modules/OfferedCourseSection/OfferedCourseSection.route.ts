import express from 'express';
import { OfferedCourseSectionController } from './OfferedCourseSection.controller';

const router = express.Router();

router.get('/', OfferedCourseSectionController.getAllOfferedCourseSections);

router.get('/:id', OfferedCourseSectionController.getSingleOfferedCourseSection);

router.post('/', OfferedCourseSectionController.createOfferedCourseSection);

router.patch('/:id', OfferedCourseSectionController.updateOfferedCourseSection);

router.delete('/:id', OfferedCourseSectionController.deleteOfferedCourseSection);

export const OfferedCourseSectionRoutes = router;
