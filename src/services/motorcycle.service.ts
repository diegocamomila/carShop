import { ErrorTypes } from '../errors/catalog';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycleModel: IModel<IMotorcycle>;
  
  constructor(model: IModel<IMotorcycle>) {
    this._motorcycleModel = model;
  }

  public async create(obj: IMotorcycle) {
    const newMotorcycle = this._motorcycleModel.create(obj);
    // console.log(newCar);
    return newMotorcycle;
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    const results = await this._motorcycleModel.readOne(_id);
    console.log('readOne service', results);
    if (!results) throw new Error(ErrorTypes.EntityNotFound);
    return results;
  }

  public async read(): Promise<IMotorcycle[]> {
    const results = await this._motorcycleModel.read();
    console.log('read service', results);
    return results;
  }

  public async update(_id: string, obj: IMotorcycle): Promise<IMotorcycle> {
    const results = await this._motorcycleModel.update(_id, obj);

    if (!results) throw new Error(ErrorTypes.EntityNotFound);

    return results;
  }

  public async delete(_id: string): Promise<IMotorcycle> {
    const results = await this._motorcycleModel.delete(_id);

    if (!results) throw new Error(ErrorTypes.EntityNotFound);

    return results;
  }
}

export default MotorcycleService;