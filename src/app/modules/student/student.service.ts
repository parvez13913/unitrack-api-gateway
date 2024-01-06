import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService, CoreService as HttpService } from '../../../shared/axios';

const getAllStudents = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/students', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getSingleStudent = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/students/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const updateStudent = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.patch(`/students/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const StudentService = {
  getAllStudents,
  getSingleStudent,
  updateStudent
};
