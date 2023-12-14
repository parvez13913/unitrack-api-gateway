import express from 'express';
import { SemesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

router.get('/', SemesterRegistrationController.getAllSemesterRegistrations);

router.get('/:id', SemesterRegistrationController.getSingleSemesterRegistration);

router.post('/', SemesterRegistrationController.createSemesterRegistration);

router.patch('/:id', SemesterRegistrationController.updateSemesterRegistration);

router.delete('/:id', SemesterRegistrationController.deleteSemesterRegistration);

export const SemesterRegistrationRoutes = router;
