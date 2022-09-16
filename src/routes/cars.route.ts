import { Router } from 'express';
import validateCar from '../middlewares/validateCar';
import makeCarsController from './factory/cars.factory';

const CarsController = makeCarsController();

const routes = Router();

routes.post('/', validateCar, (req, res) => CarsController.create(req, res));

export default routes;