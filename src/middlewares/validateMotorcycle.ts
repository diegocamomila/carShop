import { NextFunction, Request, Response } from 'express';
import MotorcycleZodSchema from '../interfaces/IMotorcycle';

const validateMotorcycle = (req: Request, res: Response, next: NextFunction) => {
  console.log('validate Motorcycle', req.body);
  const parsed = MotorcycleZodSchema.safeParse(req.body);
  if (parsed.success) return next();
  return res.status(400).json(JSON.stringify(parsed));  
};

export default validateMotorcycle;
