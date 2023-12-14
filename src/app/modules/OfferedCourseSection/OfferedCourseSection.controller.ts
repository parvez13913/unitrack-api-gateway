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

const getAllOfferedCourseSections = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.getAllOfferedCourseSections(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleOfferedCourseSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.getSingleOfferedCourseSection(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOfferedCourseSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.updateOfferedCourseSection(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCourseSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.deleteOfferedCourseSection(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseSectionController = {
  createOfferedCourseSection,
  getAllOfferedCourseSections,
  getSingleOfferedCourseSection,
  updateOfferedCourseSection,
  deleteOfferedCourseSection
};
