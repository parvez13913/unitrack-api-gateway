import { NextFunction, Request, Response } from 'express';
import { OfferedCourseSectionService } from './OfferedCourseSection.service';
import sendResponse from '../../../shared/response';

const createOfferedCourseSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.createOfferedCourseSection(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseSectionController = {
  createOfferedCourseSection
};
