// template para criação dos testes de cobertura da camada de model

import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

import CarsModel from '../../../models/cars.model';
import { Model } from 'mongoose';
import { reqCreate, reqReadOneUpdateDelete, resCreate, resReadOneUpdateDelete  } from '../../mocks/cars.mock';

const model = new CarsModel();

describe('Testes da camada model cars.model', () => {
  describe('Em caso de sucesso', () => {
    before(async () => {
      sinon.stub(Model, 'create') .resolves(resCreate);
      // sinon.stub(Model, 'read') .resolves(resReadOneUpdateDelete);
      sinon.stub(Model, 'findOne').resolves(resReadOneUpdateDelete);
      sinon.stub(Model, 'find').resolves([resReadOneUpdateDelete]);
    });

    after(()=>{
      sinon.restore();
    })

    it('Testa a funçao create', async () => {
      const response = await model.create(reqCreate);

      expect(response).to.eq(resCreate);
    });

    // it('Testa a funçao read', async () => {
    //   const response = await model.read();

    //   expect(response).to.eq(resRead);
    // });
    it('successfully found all', async () => {
      const cars = await model.read();
      expect(cars).to.be.deep.equal([resReadOneUpdateDelete]);
    });

    it('successfully found', async () => {
      const car = await model.readOne(reqReadOneUpdateDelete);
      expect(car).to.be.deep.equal(resReadOneUpdateDelete);
    });


  });
});