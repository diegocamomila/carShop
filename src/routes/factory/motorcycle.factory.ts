import MotorcycleController from '../../controllers/motorcycle.controller';
import MotorcycleModel from '../../models/motorcycle.model';
import MotorcycleService from '../../services/motorcycle.service';

const makeMotorcycleController = (): MotorcycleController => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel);
  const motorcycleController = new MotorcycleController(motorcycleService);
  return motorcycleController;
};

export default makeMotorcycleController;
