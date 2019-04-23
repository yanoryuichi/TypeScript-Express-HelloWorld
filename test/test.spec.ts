import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';

import app from '../src/app';
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return response on call', (done) => {
    chai.request(app)
      .get('/')
      .end((error, res) => {
        expect(res.text).to.equal("Hello World");
        done();
      });
  });
});