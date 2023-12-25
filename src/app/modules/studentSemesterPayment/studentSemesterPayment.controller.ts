import { NextFunction, Request, Response } from 'express';
import { StudentSemesterPaymentService } from './studentSemesterPayment.service';
import sendResponse from '../../../shared/response';

const getMySemesterPayments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentSemesterPaymentService.getMySemesterPayments(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentSemesterPaymentController = {
  getMySemesterPayments
};
