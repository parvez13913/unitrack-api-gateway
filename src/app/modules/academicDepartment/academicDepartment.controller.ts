import { NextFunction, Request, Response } from 'express';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/response';

const createAcademicDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.createAcademicDepartment(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllAcademicDepartments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getAllAcademicDepartments(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleAcademicDepartments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getSingleAcademicDepartments(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartments
};
