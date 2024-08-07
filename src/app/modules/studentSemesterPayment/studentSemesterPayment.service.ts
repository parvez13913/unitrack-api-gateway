import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const getMySemesterPayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/studentSemesterPayments/mySemesterPayments', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};


const initiatePayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/studentSemesterPayments/initiatePayment', {
    params: req.body,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const completePayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/studentSemesterPayments/completePayment', {
    params: req.body,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const StudentSemesterPaymentService = {
  getMySemesterPayment,
  initiatePayment,
  completePayment
};
