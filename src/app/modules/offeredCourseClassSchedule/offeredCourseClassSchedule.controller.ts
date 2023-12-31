import { NextFunction, Request, Response } from 'express';
import { OfferedCourseClassScheduleService } from './offeredCourseClassSchedule.service';
import sendResponse from '../../../shared/response';

const createOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.createOfferedCourseClassSchedule(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllOfferedCourseClassSchedules = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.getAllOfferedCourseClassSchedules(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.getSingleOfferedCourseClassSchedule(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.updateOfferedCourseClassSchedule(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.deleteOfferedCourseClassSchedule(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseClassScheduleController = {
  createOfferedCourseClassSchedule,
  getAllOfferedCourseClassSchedules,
  getSingleOfferedCourseClassSchedule,
  updateOfferedCourseClassSchedule,
  deleteOfferedCourseClassSchedule
};
