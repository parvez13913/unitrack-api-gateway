import { NextFunction, Request, Response } from 'express';
import { AuthenticationSerice } from './auth.service';
import sendResponse from '../../../shared/response';
import config from '../../../config';
import httpStatus from 'http-status';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationSerice.loginUser(req);

    const { refreshToken, ...others } = result.data;

    // Set refreshToken into browser cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', result?.data?.refreshToken, cookieOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User loged in !',
      data: others
    });
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationSerice.refreshToken(req);

    const { refreshToken, ...others } = result.data;

    // Set refreshToken into browser cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };
    res.cookie('refreshToken', result?.data?.refreshToken, cookieOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'New refreshToken generated!',
      data: others
    });
  } catch (error) {
    next(error);
  }
};

export const AuthenticationController = {
  loginUser,
  refreshToken
};
