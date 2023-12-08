import express from 'express';
import { BuildingController } from './building.controller';

const router = express.Router();

router.get('/', BuildingController.getAllBuildings);

router.post('/', BuildingController.createBuilding);

export const BuildingRoutes = router;
