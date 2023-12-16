import { NextFunction, Request, Response } from 'express';
import { StudentEnrolledCourseService } from './studentEnrolledCourse.service';
import sendResponse from '../../../shared/response';

const createStudentEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.createStudentEnrolledCourse(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllStudentEnrolledCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.getAllStudentEnrolledCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleStudentEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.getSingleStudentEnrolledCourse(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateStudentEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.updateStudentEnrolledCourse(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentEnrolledCourseController = {
  createStudentEnrolledCourse,
  getAllStudentEnrolledCourses,
  getSingleStudentEnrolledCourse,
  updateStudentEnrolledCourse
};
