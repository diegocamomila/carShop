import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarsController {
  private _service: IService<ICar>;

  constructor(service: IService<ICar>) {
    this._service = service;
  }

  public async create(req: Request, res: Response<ICar>) {
    const { model, year, color, buyValue, seatsQty, doorsQty }: ICar = req.body;
    const car = { model, year, color, buyValue, seatsQty, doorsQty };
    const results = await this._service.create(car);
    return res.status(201).json(results);
  }

  public async readOne(req: Request, res: Response<ICar>) {
    const response = await this._service.readOne(req.params.id);
    return res.status(200).json(response);
  }

  public async read(req: Request, res: Response<ICar[]>) {
    const response = await this._service.read();
    return res.status(200).json(response);
  }

  public async update(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const response = await this._service.update(id, req.body);

    return res.status(200).json(response);
  }

  public async delete(req: Request, res: Response<ICar>) {
    await this._service.delete(req.params.id);

    return res.status(204).end();
  }
}