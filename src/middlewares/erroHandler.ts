// fonte aula 30/2 calaça
import { ErrorRequestHandler, Response } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, errorCatalog } from '../errors/catalog';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res: Response,
  _next,
) => {
  // o instanceof verifica se esse é erro é uma instância do ZodError
  if (err instanceof ZodError) {
    // se for nós sabemos que é um erro de validação e podemos usar o status 400 e a própria mensagem do zod para retornar a response
    return res.status(400).json({ message: err.issues });
  }
  // aqui vamos fazer o cast da mensagem de erro para uma chave do Enum ErrorTypes
  // nato: usar comentário para explicar o keyof typeof
  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  // vamos usar a mensagem para acessar um erro do nosso catálogo
  // se a mensagem não for uma chave do nosso catálogo "mappedError" vai retornar undefined e não entrar no "if"
  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    // dito que o erro está mapeado no nosso catálogo 
    // "mappedError" tem valores necessário para responder a requisição
    const { httpStatus, error } = mappedError;
    return res.status(httpStatus).json({ error });
  }
  console.log(err);
  // return res.status(500).json({ message: 'internal error' });
  return res.status(500).json({ message: err.message });
};

export default errorHandler;
