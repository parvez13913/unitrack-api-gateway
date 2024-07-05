import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { PaymentsService } from './payments.service';

const webhook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentsService.webhook(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllPayments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentsService.getAllPayments(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSinglePayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentsService.getSinglePayment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const PaymentsController = {
  webhook,
  getAllPayments,
  getSinglePayment
};
