import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const createRoom = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/rooms', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getAllRooms = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/rooms', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const RoomService = {
  createRoom,
  getAllRooms
};