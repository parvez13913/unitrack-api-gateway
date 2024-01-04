import { NextFunction, Request, Response } from 'express';
import { AuthenticationSerice } from './auth.service';
import sendResponse from '../../../shared/response';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationSerice.loginUser(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AuthenticationController = {
  loginUser
};
