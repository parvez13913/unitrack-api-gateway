import { NextFunction, Request, Response } from 'express';
import { StudentService } from './student.service';
import sendResponse from '../../../shared/response';

const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getAllStudents(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getSingleStudent(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.updateStudent(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.deleteStudent(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getMyCourses(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyAcademicInfos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getMyAcademicInfos(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourseSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getMyCourseSchedules(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
  getMyCourses,
  getMyAcademicInfos,
  getMyCourseSchedules
};
