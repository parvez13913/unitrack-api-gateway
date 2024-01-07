import { NextFunction, Request, Response } from 'express';
import { ManagementDepartmentService } from './managementDepartment.service';
import sendResponse from '../../../shared/response';

const createDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.createDepartment(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllDepartments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.getAllDepartments(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ManagementDepartmentController = {
  createDepartment,
  getAllDepartments
};
