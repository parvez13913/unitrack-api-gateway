import express from 'express';
import { RoomController } from './room.controller';

const router = express.Router();

router.get('/', RoomController.getAllRooms);

router.post('/', RoomController.createRoom);

export const RoomRoutes = router;
