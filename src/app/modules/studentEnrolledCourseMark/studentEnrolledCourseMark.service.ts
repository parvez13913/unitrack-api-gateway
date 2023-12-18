import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const updateStudentMarks = async (req: Request): Promise<IGenericResponse> => {
  console.log(req.body);

  const response: IGenericResponse = await CoreService.patch(
    '/studentEnrolledCourseMarks/updateMarks',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

export const StudentEnrolledCourseMarkService = {
  updateStudentMarks
};
