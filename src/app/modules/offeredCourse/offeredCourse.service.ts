import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createOfferedCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/offeredCourses', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const OfferedCourseService = {
  createOfferedCourse
};