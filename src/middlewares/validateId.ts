import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';

const validateId = (
  req: Request & { params: { _id: string } },
  _res: Response, 
  next: NextFunction,
) => {
  const { id } = req.params;
  // console.log('validateId', id);
  if (!isValidObjectId(id)) throw new Error(ErrorTypes.InvalidMongoId);
  return next();
};

export default validateId;
