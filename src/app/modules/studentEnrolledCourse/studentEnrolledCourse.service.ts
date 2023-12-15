import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createStudentEnrolledCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/studentEnrolledCourses', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const StudentEnrolledCourseService = {
  createStudentEnrolledCourse
};
