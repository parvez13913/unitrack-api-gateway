import { Request } from 'express';
import { CoreService as HttpService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academicSemesters', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getAllAcademicSemester = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/academicSemesters', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const AcademicSemesterService = {
  createAcademicSemester,
  getAllAcademicSemester
};
