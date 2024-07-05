import express from 'express';
import { PaymentsController } from './payments.controller';

const router = express.Router();


router.post("/webhook", PaymentsController.webhook)


export const PaymentRoutes = router;
