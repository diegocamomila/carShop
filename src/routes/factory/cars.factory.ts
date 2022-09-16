import CarsController from '../../controllers/cars.controller';
import CarsModel from '../../models/cars.model';
import CarsService from '../../services/cars.service';

const makeCarsController = (): CarsController => {
  const carsModel = new CarsModel();
  const carsService = new CarsService(carsModel);
  const carsController = new CarsController(carsService);
  return carsController;
};

export default makeCarsController;
