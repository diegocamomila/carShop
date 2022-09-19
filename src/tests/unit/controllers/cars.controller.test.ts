import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarsModel from '../../../models/cars.model';
import CarsService from '../../../services/cars.service';
import CarsController from '../../../controllers/cars.controller';
import { reqCreate, resCreate, resReadOneUpdateDelete, reqReadOneUpdateDelete } from '../../mocks/cars.mock';
import { Request, Response } from 'express';

const model = new CarsModel();
const service = new CarsService(model);
const controller = new CarsController(service);

describe('Testes da camada controller cars.controller', () => {
  const req = {} as Request;
  const res = {} as Response;

  describe('Em caso de sucesso', () => {
    before(async () => {
      sinon.stub(service, 'create').resolves(resCreate);
      sinon.stub(service, 'read').resolves([resReadOneUpdateDelete]);
      sinon.stub(service, 'readOne').resolves(resReadOneUpdateDelete);
      sinon.stub(service, 'update').resolves(resReadOneUpdateDelete);
      // sinon.stub(service, 'delete').resolves(resReadOneUpdateDelete);


      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      });

    after(()=>{
      sinon.restore();
    })

    it('Testa a funçao create', async () => {
      req.body = reqCreate;
      const response = await controller.create(req, res);
      
      expect((response.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((response.json as sinon.SinonStub).calledWith(resCreate)).to.be.true;
    });

    it('Testa a funçao read', async () => {
      const response = await controller.read(req, res);

      expect((response.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((response.json as sinon.SinonStub).calledWith([resReadOneUpdateDelete])).to.be.true;
    });

    it('Testa a funçao readOne', async () => {
      req.params = {id: reqReadOneUpdateDelete}
      const response = await controller.readOne(req, res);

      expect((response.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((response.json as sinon.SinonStub).calledWith(resReadOneUpdateDelete)).to.be.true;
    });

    it('Testa a funçao update', async () => {
      req.params = {id: reqReadOneUpdateDelete}
      req.body = reqCreate;
      const response = await controller.update(req, res);

      expect((response.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((response.json as sinon.SinonStub).calledWith(resReadOneUpdateDelete)).to.be.true;
    });

    // it('Testa a funçao delete', async () => {
    //   req.params.id = reqReadOneUpdateDelete;
    //   const response = await controller.delete(req, res);

    //   expect((response.status as sinon.SinonStub).calledWith(204)).to.be.true;
    //   expect((response.json as sinon.SinonStub).calledWith(resReadOneUpdateDelete)).to.be.true;
    });
});