import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarsModel from '../../../models/cars.model';
import CarsService from '../../../services/cars.service';
import { reqCreate, resCreate, resRead } from '../../mocks/cars.mock';

const model = new CarsModel();
const service = new CarsService(model);

describe('Testes da camada service cars.service ', () => {
  describe('Em caso de sucesso', () => {
    before(async () => {
      sinon.stub(model, 'create') .resolves(resCreate);
      sinon.stub(model, 'read') .resolves(resRead);
    });

    after(()=>{
      sinon.restore();
    })

    it('Testa a funçao create', async () => {
      const response = await service.create(reqCreate);

      expect(response).to.eq(resCreate);
    });

    it('Testa a funçao read', async () => {
      const response = await service.read();

      expect(response).to.eq(resRead);
    }); 
  });
});