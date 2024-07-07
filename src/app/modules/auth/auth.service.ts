import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService } from '../../../shared/axios';

const loginUser = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post('/auth/login', req.body);

  return response;
};

const refreshToken = async (req: Request): Promise<IGenericResponse> => {
  const { refreshToken } = req.cookies;
  const response: IGenericResponse = await AuthService.post('/auth/refreshToken', req.body, {
    headers: {
      cookie: `refreshToken=${refreshToken}`
    }
  });

  return response;
};

const changePassword = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post('/auth/changePassword', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const forgotPassword = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post('/auth/forgotPassword', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const resetPassword = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post('/auth/resetPassword', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const AuthenticationSerice = {
  loginUser,
  refreshToken,
  changePassword,
  forgotPassword,
  resetPassword
};
