import express from 'express';
import { SemesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

router.get('/getMyRegistration', SemesterRegistrationController.getMyRegistration);

router.get('/', SemesterRegistrationController.getAllSemesterRegistrations);

router.get('/:id', SemesterRegistrationController.getSingleSemesterRegistration);

router.post('/', SemesterRegistrationController.createSemesterRegistration);

router.post('/enrollIntoCourse', SemesterRegistrationController.startMySemesterRegistration);

router.post('/startRegistration', SemesterRegistrationController.startMySemesterRegistration);

router.post('/withdrawFromCourse', SemesterRegistrationController.withdrewFromCourse);

router.post('/confirmMyRegistration', SemesterRegistrationController.confirmMyRegistration);

router.patch('/:id', SemesterRegistrationController.updateSemesterRegistration);

router.delete('/:id', SemesterRegistrationController.deleteSemesterRegistration);

export const SemesterRegistrationRoutes = router;
