import { Router } from 'express';
import CarsRoutes from './cars.route';
import MotorcycleRoutes from './motorcycle.route';

const routes = Router();

routes.use('/cars', CarsRoutes);
routes.use('/motorcycle', MotorcycleRoutes);

export default routes;