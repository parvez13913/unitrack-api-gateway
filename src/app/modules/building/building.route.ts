import express from 'express';
import { BuildingController } from './building.controller';

const router = express.Router();

router.get('/', BuildingController.getAllBuildings);

router.get('/:id', BuildingController.getSingleBuilding);

router.post('/', BuildingController.createBuilding);

router.patch('/:id', BuildingController.updateBuilding);

export const BuildingRoutes = router;
