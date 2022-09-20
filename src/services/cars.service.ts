import { ErrorTypes } from '../errors/catalog';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

class CarsService implements IService<ICar> {
  private _carModel: IModel<ICar>;
  
  constructor(model: IModel<ICar>) {
    this._carModel = model;
  }

  public async create(obj: ICar) {
    const newCar = this._carModel.create(obj);
    // console.log(newCar);
    return newCar;
  }

  public async readOne(_id: string): Promise<ICar> {
    const results = await this._carModel.readOne(_id);
    // console.log('readOne service', results);
    if (!results) throw new Error(ErrorTypes.EntityNotFound);
    return results;
  }

  public async read(): Promise<ICar[]> {
    const results = await this._carModel.read();
    //  console.log('read service', results);
    return results;
  }

  public async update(_id: string, obj: ICar): Promise<ICar> {
    const results = await this._carModel.update(_id, obj);

    if (!results) throw new Error(ErrorTypes.EntityNotFound);

    return results;
  }

  public async delete(_id: string): Promise<ICar> {
    const results = await this._carModel.delete(_id);

    if (!results) throw new Error(ErrorTypes.EntityNotFound);

    return results;
  }
}

export default CarsService;