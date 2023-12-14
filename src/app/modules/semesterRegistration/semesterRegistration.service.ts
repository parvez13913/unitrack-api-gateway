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

export const SemesterRegistrationService = {
  createSemesterRegistration
};
