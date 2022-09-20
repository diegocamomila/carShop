import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;
  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id: string): Promise<T | null> {
    return this._model.findOne({ _id });
  }  

  public async read(): Promise<T[]> {
    return this._model.find();
  }
  
  public async update(_id: string, obj: any): Promise<T | null> {
    return this._model.findOneAndUpdate(
      { _id },
      { ...obj },
      { new: true },
    ); 
  }

  public async delete(_id: string): Promise<T | null> {
    return this._model.findOneAndRemove({ _id });
  }
} 

export default MongoModel;
