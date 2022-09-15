import { Router } from 'express';
import CarsRoutes from './carsRoutes';

const routes = Router();

routes.use('/cars', CarsRoutes);

export default routes;