import { isValidObjectId, Model } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;
  constructor(model:Model<T>) {
    this._model = model;
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async update(id: string, obj: any): Promise<T | null> {
    return this._model.findOneAndUpdate(
      { id },
      { ...obj },
      { new: true },
    ); 
  }

  public async delete(id: string): Promise<T | null> {
    return this._model.findOneAndRemove({ id });
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
} 

export default MongoModel;
