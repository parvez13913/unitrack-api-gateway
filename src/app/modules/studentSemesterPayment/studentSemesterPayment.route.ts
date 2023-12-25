import express from 'express';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';

const router = express.Router();

router.get('/mySemesterPayments', StudentSemesterPaymentController.getMySemesterPayments);

export const StudentSemesterPaymentRoutes = router;
