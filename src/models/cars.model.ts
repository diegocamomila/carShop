import { model as mongooseCreateModel, Schema } from 'mongoose';
import { CarDTO } from '../interfaces/Car';
import MongoModel from './mongoModel';

const carMongooseSchema = new Schema<CarDTO>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, {
  versionKey: false,
});

class CarsModel extends MongoModel<CarDTO> {
  constructor(model = mongooseCreateModel('Car', carMongooseSchema)) {
    super(model);
  }
}

export default CarsModel;
