import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService } from '../../../shared/axios';

const createDepartment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post(
    '/managementDepartments/createDepartment',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

const getAllDepartments = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.get('/managementDepartments', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getSingleDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.get(`/managementDepartments/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const updateDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.patch(
    `/managementDepartments/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

export const ManagementDepartmentService = {
  createDepartment,
  getAllDepartments,
  getSingleDepartment,
  updateDepartment
};
