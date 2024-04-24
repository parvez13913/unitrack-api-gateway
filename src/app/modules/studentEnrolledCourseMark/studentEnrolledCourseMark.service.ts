import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const getAllStudentEnrolledCourseMarks = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/studentEnrolledCourseMarks', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getMyCourseMarks = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/studentEnrolledCourseMarks/myMarks', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const updateStudentMarks = async (req: Request): Promise<IGenericResponse> => {
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

const updateFinalMarks = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    '/studentEnrolledCourseMarks/updateFinalMarks',
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
  getAllStudentEnrolledCourseMarks,
  getMyCourseMarks,
  updateStudentMarks,
  updateFinalMarks
};
