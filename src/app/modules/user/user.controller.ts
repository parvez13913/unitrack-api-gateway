import { NextFunction, Request, Response } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { UsersService } from './user.service';
import sendResponse from '../../../shared/response';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UsersService.createStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UsersService.createFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UsersService.createAdmin(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UsersController = {
  createStudent,
  createFaculty,
  createAdmin
};
