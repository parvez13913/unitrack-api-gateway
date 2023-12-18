import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createSemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/semesterRegistrations', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getAllSemesterRegistrations = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/semesterRegistrations', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getSingleSemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(`/semesterRegistrations/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const updateSemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;

  const response: IGenericResponse = await CoreService.patch(
    `/semesterRegistrations/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteSemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;

  const response: IGenericResponse = await CoreService.delete(`/semesterRegistrations/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const startMySemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semesterRegistrations/startRegistration`,
    {},
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const enrollIntoCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semesterRegistrations/enrollIntoCourse`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const withdrewFromCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semesterRegistrations/withdrawFromCourse`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const confirmMyRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
    `/semesterRegistrations/confirmMyRegistration`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const SemesterRegistrationService = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
  deleteSemesterRegistration,
  startMySemesterRegistration,
  enrollIntoCourse,
  withdrewFromCourse,
  confirmMyRegistration
};
