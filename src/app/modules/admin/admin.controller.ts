import { NextFunction, Request, Response } from 'express';
import { AdminService } from './admin.service';
import sendResponse from '../../../shared/response';

const getAllAdmins = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.getAllAdmins(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AdminController = {
  getAllAdmins
};