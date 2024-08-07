import { NextFunction, Request, Response } from 'express';
import { AuthenticationSerice } from './auth.service';
import sendResponse from '../../../shared/response';
import config from '../../../config';
import httpStatus from 'http-status';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationSerice.loginUser(req);

    const { ...others } = result.data;

    // Set refreshToken into browser cookie
    // const cookieOptions = {
    //   secure: config.env === 'production',
    //   httpOnly: true
    // };
    // res.cookie('refreshToken', result?.data?.refreshToken, cookieOptions);

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

const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationSerice.changePassword(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationSerice.forgotPassword(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationSerice.resetPassword(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AuthenticationController = {
  loginUser,
  refreshToken,
  changePassword,
  forgotPassword,
  resetPassword
};
