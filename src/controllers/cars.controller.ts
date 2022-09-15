import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import Service from '../services/cars.servise';

export default class CarController {
  private service: typeof Service;
  constructor(service: typeof Service) {
    this.service = service;
  }
  static async create(req: Request & { body: ICar }, res: Response<ICar>) {
    const response = await this.service.create(req.body);

    return res.status(201).json(response);
  }
}