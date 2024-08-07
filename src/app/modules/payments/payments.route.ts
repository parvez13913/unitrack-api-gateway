import express from 'express';
import { PaymentsController } from './payments.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();


router.get("/", auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN,), PaymentsController.getAllPayments);

router.get("/:id", auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN,), PaymentsController.getSinglePayment);

router.post("/webhook", PaymentsController.webhook);


export const PaymentRoutes = router;
