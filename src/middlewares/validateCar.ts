import { NextFunction, Request, Response } from 'express';
import CarZodSchema from '../interfaces/ICar';

const validateCar = (req: Request, res: Response, next: NextFunction) => {
  // console.log('validateCar', req.body);
  const parsed = CarZodSchema.safeParse(req.body);
  if (parsed.success) return next();
  return res.status(400).json(JSON.stringify(parsed));  
};

export default validateCar;
