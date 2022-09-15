// fonte aula 30/2 calaça
export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorResponseObject = { 
  errorMessage: string;
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};
  
export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    errorMessage: 'Object not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    errorMessage: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};