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

const getSingleSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getSingleSemesterRegistration(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.updateSemesterRegistration(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.deleteSemesterRegistration(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const startMySemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.startMySemesterRegistration(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const enrollIntoCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.enrollIntoCourse(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const withdrewFromCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.withdrewFromCourse(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
  deleteSemesterRegistration,
  startMySemesterRegistration,
  enrollIntoCourse,
  withdrewFromCourse
};
