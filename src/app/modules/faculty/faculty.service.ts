import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService, CoreService } from '../../../shared/axios';

const getAllFaculties = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/faculties', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getSingleFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;

  const response: IGenericResponse = await CoreService.get(`/faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const updateFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.patch(`/faculties/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const deleteFaculty = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.delete(`/faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getMyCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(`/faculties/myCourses`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getMyCourseStudents = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(`/faculties/myCourseStudents`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getFacultyProfile = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await AuthService.get(`/faculties/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const FacultyService = {
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
  getMyCourses,
  getMyCourseStudents,
  getFacultyProfile
};
