import { Router } from 'express';

const routes = Router();

routes.post('/', (req, res) => controller.create(req, res));

export default routes;