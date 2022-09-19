import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';

const validateId = (req: Request, _res: Response, next: NextFunction) => {
  const { id } = req.params;
  
  // console.log('validateId', id);
  if (id.length !== 24) throw new Error(ErrorTypes.InvalidMongoId);
  if (!isValidObjectId(id)) throw new Error(ErrorTypes.EntityNotFound);

  return next();
};

export default validateId;
