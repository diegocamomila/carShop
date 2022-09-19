import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarsModel from '../../../models/cars.model';
import CarsService from '../../../services/cars.service';
import { reqCreate, reqReadOneUpdateDelete, resCreate, resReadOneUpdateDelete} from '../../mocks/cars.mock';

const model = new CarsModel();
const service = new CarsService(model);

describe('Testes da camada service cars.service ', () => {
  describe('Em caso de sucesso', () => {
    before(async () => {
      sinon.stub(model, 'create') .resolves(resCreate);
      sinon.stub(model, 'read') .resolves([resReadOneUpdateDelete]);
      sinon.stub(model, 'readOne') .resolves(resReadOneUpdateDelete);
      sinon.stub(model, 'update') .resolves(resReadOneUpdateDelete);
      sinon.stub(model, 'delete') .resolves(resReadOneUpdateDelete);
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

      expect(response).to.be.deep.equal([resReadOneUpdateDelete]);
      expect(response).to.be.an('array');
    }); 
    
    it('Testa a funçao readOne', async () => {
      const response = await service.readOne(reqReadOneUpdateDelete);

      expect(response).to.eq(resReadOneUpdateDelete);
    });

    it('Testa a funçao update', async () => {
      const response = await service.delete(reqReadOneUpdateDelete);

      expect(response).to.eq(resReadOneUpdateDelete);
    });

    it('Testa a função delete', async () => {
      const response = await service.delete(reqReadOneUpdateDelete);

      expect(response).to.eq(resReadOneUpdateDelete);
    });
  });
});