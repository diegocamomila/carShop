import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  static async create(req: Request & { body: ICar }, res: Response<ICar>) {
    const response = await this.service.create(req.body);

    return res.status(201).json(response);
  }
}