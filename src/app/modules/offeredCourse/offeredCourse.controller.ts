import { NextFunction, Request, Response } from 'express';
import { OfferedCourseService } from './offeredCourse.service';
import sendResponse from '../../../shared/response';

const createOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.createOfferedCourse(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllOfferedCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getAllOfferedCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getSingleOfferedCourse(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.updateOfferedCourse(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseController = {
  createOfferedCourse,
  getAllOfferedCourses,
  getSingleOfferedCourse,
  updateOfferedCourse
};
