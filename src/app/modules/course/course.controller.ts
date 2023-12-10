import { NextFunction, Request, Response } from 'express';
import { CourseService } from './course.service';
import sendResponse from '../../../shared/response';

const createCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.createCourse(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getAllCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getSingleCourse(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CourseController = {
  createCourse,
  getAllCourses,
  getSingleCourse
};
