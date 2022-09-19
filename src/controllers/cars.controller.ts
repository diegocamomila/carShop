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
    // console.log('controller readone', req.params);
    const results = await this._service.readOne(req.params.id);
    // console.log('controller readone', results);
    return res.status(200).json(results);
  }

  public async read(req: Request, res: Response<ICar[]>) {
    const results = await this._service.read();
    console.log('controller read', results);
    return res.status(200).json(results);
  }

  public async update(req: Request, res: Response<ICar>) {
    // console.log('console update', req.params, req.body);
    const { id } = req.params;
    const results = await this._service.update(id, req.body);
    // console.log('controller update', results);
    return res.status(200).json(results);
  }

  public async delete(req: Request, res: Response<ICar>) {
    // console.log('console delete', req.params);
    // const results = 
    await this._service.delete(req.params.id);
    // console.log('controller delete', results);
    return res.status(204).end();
  }
}