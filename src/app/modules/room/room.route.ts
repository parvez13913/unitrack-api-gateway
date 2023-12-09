import express from 'express';
import { RoomController } from './room.controller';

const router = express.Router();

router.get('/', RoomController.getAllRooms);

router.get('/:id', RoomController.getSingleRoom);

router.post('/', RoomController.createRoom);

router.patch('/:id', RoomController.updateRoom);

export const RoomRoutes = router;
