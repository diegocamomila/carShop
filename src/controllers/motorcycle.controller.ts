import { Request, Response } from 'express';
import { ErrorTypes } from '../errors/catalog';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import IService from '../interfaces/IService';

export default class CarsController {
  private _service: IService<IMotorcycle>;

  constructor(service: IService<IMotorcycle>) {
    this._service = service;
  }

  public async create(req: Request, res: Response<IMotorcycle>) {
    const { model, year, color, buyValue, category, engineCapacity }: IMotorcycle = req.body;
    const motorcycle = { model, year, color, buyValue, category, engineCapacity };
    const results = await this._service.create(motorcycle);
    return res.status(201).json(results);
  }

  public async readOne(req: Request, res: Response<IMotorcycle>) {
    // console.log('controller readone', req.params);
    const results = await this._service.readOne(req.params.id);
    if (!results) throw new Error(ErrorTypes.EntityNotFound);
    // console.log('controller readone', results);
    return res.status(200).json(results);
  }

  public async read(req: Request, res: Response<IMotorcycle[]>) {
    const results = await this._service.read();
    // console.log('controller read', results);
    return res.status(200).json(results);
  }

  public async update(req: Request, res: Response<IMotorcycle>) {
    // console.log('console update', req.params, req.body);
    const { id } = req.params;
    const results = await this._service.update(id, req.body);
    // console.log('controller update', results);
    return res.status(200).json(results);
  }

  public async delete(req: Request, res: Response<IMotorcycle>) {
    // console.log('console delete', req.params);
    // const results = 
    await this._service.delete(req.params.id);
    // console.log('controller delete', results);
    return res.status(204).end();
  }
}