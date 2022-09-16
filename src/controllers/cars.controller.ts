import { Request, Response } from 'express';
import { CarDTO } from '../interfaces/Car';
import IService from '../interfaces/IService';

export default class CarsController {
  private _service: IService<CarDTO>;

  constructor(service: IService<CarDTO>) {
    this._service = service;
  }

  async create(req: Request, res: Response<CarDTO>) {
    const { model, year, color, buyValue, seatsQty, doorsQty }: CarDTO = req.body;
    const car = { model, year, color, buyValue, seatsQty, doorsQty };
    // console.log(car);
    const results = await this._service.create(car);
    return res.status(201).json(results);
  }
}