import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
const { expect } = chai;

import { app } from '../../app';
import Products from '../../database/models/Products';

chai.use(chaiHttp);

const productsMock = {
  id: 'teste',
  productName: 'smartphone',
  price: 1,
  image: 'link',
  description: 'teste'
}

describe('/products', () => {
  describe('GET', () => {
    beforeEach(() => {
      sinon.stub(Products, 'findAll').resolves([(productsMock as unknown as Products)])
    });
    afterEach(() => {
      sinon.restore();
    })
    it('verifica se o endpoint retorna um array e status 200', async () => {
      const response = await chai.request(app).get('/products');
      expect(response.status).equal(200)
      expect(response.body).to.deep.equal([productsMock])
    });
  })
});