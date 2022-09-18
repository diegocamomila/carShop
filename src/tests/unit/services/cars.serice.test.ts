import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarsModel from '../../../models/cars.model';
import CarsService from '../../../services/cars.service';
import { reqCreate, resCreate } from '../../mocks/cars.mock';

const model = new CarsModel();
const service = new CarsService(model);

describe('Testes da camada service cars.service ', () => {
  describe('Em caso de sucesso', () => {
    before(async () => {
      sinon.stub(model, 'create') .resolves(resCreate);
    });

    after(()=>{
      sinon.restore();
    })

    it('Testa a funçao create', async () => {
      const response = await service.create(reqCreate);

      expect(response).to.eq(resCreate);
    });    
  });
});