import { NextFunction, Request, Response } from 'express';
import { SemesterRegistrationService } from './semesterRegistration.service';
import sendResponse from '../../../shared/response';

const createSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.createSemesterRegistration(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllSemesterRegistrations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getAllSemesterRegistrations(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistrations
};
