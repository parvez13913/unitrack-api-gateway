import { Request, Response, NextFunction } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';

const createAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.createAcademicSemester(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllAcademicSemester(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getSingleAcademicSemester(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester
};
