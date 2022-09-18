// template para criação dos testes de cobertura da camada de model

import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;

import CarsModel from '../../../models/cars.model';
import { Model } from 'mongoose';
import { reqCreate, resCreate  } from '../../mocks/cars.mock';

const model = new CarsModel();

describe('Testes da camada model cars.model', () => {
  describe('Em caso de sucesso', () => {
    before(async () => {
      sinon.stub(Model, 'create') .resolves(resCreate);
      //sinon.stub(Model, 'read') .resolves(resRead);
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
  });
});