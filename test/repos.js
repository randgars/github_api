// process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Repos', () => {
  /*
  * Тест для /GET 
  */
  describe('/GET repos', () => {
      it('it should GET all repos', (done) => {
        chai.request(server)
            .get('/api/repos')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});