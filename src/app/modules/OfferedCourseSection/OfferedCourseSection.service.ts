import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createOfferedCourseSection = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/offeredCoursesSections', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getAllOfferedCourseSections = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/offeredCoursesSections', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getSingleOfferedCourseSection = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await CoreService.get(`/offeredCoursesSections/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const updateOfferedCourseSection = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;

  const response: IGenericResponse = await CoreService.patch(
    `/offeredCoursesSections/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

export const OfferedCourseSectionService = {
  createOfferedCourseSection,
  getAllOfferedCourseSections,
  getSingleOfferedCourseSection,
  updateOfferedCourseSection
};
