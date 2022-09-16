import { CarDTO } from '../interfaces/Car';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

class CarsService implements IService<CarDTO> {
  private _carModel: IModel<CarDTO>;
  
  constructor(model: IModel<CarDTO>) {
    this._carModel = model;
  }

  async create(obj: CarDTO) {
    const newCar = this._carModel.create(obj);
    console.log(newCar);
    return newCar;
  }
}
export default CarsService;