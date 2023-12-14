import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createOfferedCourseSection = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/offeredCoursesSections', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const OfferedCourseSectionService = {
  createOfferedCourseSection
};
