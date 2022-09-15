import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

class CarService implements IService<ICar> {
  private _carModel: IModel<ICar>;
  constructor(model: IModel<ICar>) {
    this._carModel = model;
  }

  async create(body: ICar) {
    return this._carModel.create(body);
  }
}
export default CarService;