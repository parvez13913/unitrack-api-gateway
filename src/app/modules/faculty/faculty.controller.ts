import { NextFunction, Request, Response } from 'express';
import { FacultyService } from './faculty.service';
import sendResponse from '../../../shared/response';

const updateFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.updateFaculty(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FacultyController = {
  updateFaculty
};
