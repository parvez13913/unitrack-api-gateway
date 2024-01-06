import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const getAllStudents = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/students', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const StudentService = {
  getAllStudents
};