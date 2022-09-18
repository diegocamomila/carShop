import { isValidObjectId, Model } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';
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
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.EntityNotFound);
    const results = this._model.findOne({ _id });
    if (!results || null) throw new Error(ErrorTypes.EntityNotFound);
    return results;
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
