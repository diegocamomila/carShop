import { Router } from 'express';
import validateMotorcycle from '../middlewares/validateMotorcycle';
// import validateId from '../middlewares/validateId';
import makeMotorcycleController from './factory/motorcycle.factory';

const MotorcycleController = makeMotorcycleController();

const routes = Router();

// routes.get('/:id', validateId, (req, res) => CarsController.readOne(req, res));
// routes.get('/', (req, res) => CarsController.read(req, res));
routes.post('/', validateMotorcycle, (req, res) => MotorcycleController.create(req, res));
// routes.put('/:id', validateId, validateCar, (req, res) => CarsController.update(req, res));
// routes.delete('/:id', validateId, (req, res) => CarsController.delete(req, res));
export default routes;