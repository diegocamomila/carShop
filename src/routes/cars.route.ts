import { Router } from 'express';
import validateCar from '../middlewares/validateCar';
import validateId from '../middlewares/validateId';
import makeCarsController from './factory/cars.factory';

const CarsController = makeCarsController();

const routes = Router();

routes.get('/:id', validateId, (req, res) => CarsController.readOne(req, res));
routes.get('/', (req, res) => CarsController.read(req, res));
routes.post('/', validateCar, (req, res) => CarsController.create(req, res));

export default routes;