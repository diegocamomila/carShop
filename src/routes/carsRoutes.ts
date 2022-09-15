import { Router } from 'express';
import CarController from '../controllers/cars.controller';

const routes = Router();

routes.post('/', (req, res) => CarController.create(req, res));

export default routes;