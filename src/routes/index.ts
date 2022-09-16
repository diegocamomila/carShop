import { Router } from 'express';
import CarsRoutes from './cars.route';

const routes = Router();

routes.use('/cars', CarsRoutes);

export default routes;