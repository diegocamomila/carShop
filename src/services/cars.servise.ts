import { ICar } from '../interfaces/ICar';
import Model from '../model';

export default class CarService {
  private model: Model;
  constructor(model: Model) {
    this.model = model;
  }

  static async create(body: ICar) {
    return this.model.create(body);
  }
}