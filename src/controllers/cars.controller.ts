import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import Service from '../services/cars.servise';

export default class CarController {
  private _service: Service;
  constructor(service: Service) {
    this._service = service;
  }
  async create(req: Request & { body: ICar }, res: Response<ICar>) {
    const response = await this._service.create(req.body);

    return res.status(201).json(response);
  }
}