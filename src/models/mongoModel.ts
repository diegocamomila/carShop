import { Model } from 'mongoose';

export default abstract class MongoModel<T> {
  constructor(protected _model: Model<T>) {}

  public async create(body: T) {
    return this._model.create({ ...body });
  }
}  
