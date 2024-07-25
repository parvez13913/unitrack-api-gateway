import express from 'express';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/mySemesterPayments', auth(ENUM_USER_ROLE.STUDENT), StudentSemesterPaymentController.getMySemesterPayment);

router.post('/initiatePayment', auth(ENUM_USER_ROLE.STUDENT), StudentSemesterPaymentController.initiatePayment);

router.post('/completePayment', auth(ENUM_USER_ROLE.STUDENT), StudentSemesterPaymentController.completePayment);

export const StudentSemesterPaymentRoutes = router;
