import { expect } from 'chai';
import request from 'supertest';
import app from '../../../server';


// This is to server testing
describe('Server ', () => {
  it("should return 'wlecome to LiteStack API v1!'", () => {
    request(app)
      .get('/api/v1/')
      .expect(200, 'Success!, Welcome to LiteStack API v1!')
      .expect('Content-Type', 'application/json');
  });

  it('should return "Entry point not found"', () => {
    request(app)
      .get('/api/v1/3')
      .expect(404, '{"message":"Entry point not Found"}')
      .expect('Content-Type', 'text/html');
  });
  it('should return "Welcome to the client side"', () => {
    request(app)
      .get('/')
      .expect(200, '{"message":"Welcome to the client side"}')
      .expect('Content-Type', 'application/json');
  });
});
// test suite for controllers
describe('Test suite for questions endpoint controller', () => {
  describe('GET /questions, for all questions in the endpoint', () => {
    it('should return succcess without null', (done) => {
      request(app)
        .get('/api/v1/questions')
        .end((err, res) => {
          expect(res.status).to.not.eql(null);
          expect(res.body.id).to.not.equal(null);
          done();
        });
    });
    it('respond with object in json', (done) => {
      request(app)
        .get('/api/v1/questions')
        .set('Content-Type', 'application/json')
        .expect(200);
      done();
    });
    it('should return success for response', (done) => {
      request(app)
        .get('/api/v1/questions')
        .end((error, res) => {
          expect(res.status).to.eql(200);
          done();
        });
    });
  });
  describe('GET /questions/:id, for single question resource', () => {
    it('should be an object with keys and values that are not null', (done) => {
      request(app)
        .get('/api/v1/question/1')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body.id).to.not.equal(null);
          expect(res.body.title).to.not.equal(null);
          expect(res.body.body).to.not.equal(null);
          expect(res.body.answers).to.not.equal(null);
          done();
        });
    });
    it('should be an object with keys and values', (done) => {
      request(app)
        .get('/api/v1/question/1')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          done();
        });
    });
  });
  describe('POST /questions/, to post single question resource', () => {
    describe('POST /questions', () => {
      it('should responds with json', (done) => {
        request(app)
          .post('/questions')
          .send({ title: 'qwerty', body: 'qwerty' })
          .set('Accept', 'application/json')
          .expect(200)
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });
      it('should be an object with keys and values', (done) => {
        request(app)
          .post('/api/v1/question/')
          .set('Accept', 'application/json')
          .expect(200)
          .send({
            id: '1',
            title: 'This is a test',
            body: 'this is a bosy',
          })
          .end((err, res) => {
            expect(res.err).to.be.not.eql(null);
            expect(res.status).to.be.not.eql(null);
            done();
          });
      });
      it('it return object in json', (done) => {
        request(app)
          .post('localhost:3000/api/v1/questions')
          .send({
            id: '1',
            title: 'This is a test',
            body: 'this is a bosy',
            answer: ['one', 'two'],
          })
          .set('Accept', 'application/json')
          .expect(200)
          .end((err, res) => {
            expect(res.body.id).to.not.equal(null);
            expect(res.body.title).to.not.equal(null);
            expect(res.body.body).to.not.equal(null);
            expect(res.body.answers).to.not.equal(null);
            done();
          });
      });
    });
    // fdf
    describe('POST /questions/:id/answer, to post answer', () => {
      it('it should responds with json', (done) => {
        request(app)
          .post('/api/v1/questions')
          .send({
            id: '1',
            answer: 'This is a test',
          })
          .set('Accept', 'application/json')
          .expect(200)
          .end((err, res) => {
            expect(res.body.status).to.not.equal(null);
            expect(res.body.err).to.not.equal(null);
            done();
          });
      });
      it('it should responds with json', (done) => {
        request(app)
          .post('/api/v1/questions')
          .send({
            id: '1',
            answer: 'This is a test',
          })
          .set('Accept', 'application/json')
          .expect(200)
          .end((err, res) => {
            expect(res.body.answer).to.not.equal(null);
            done();
          });
      });
      it('should be an object with keys and values', (done) => {
        request(app)
          .post('/api/v1/question/1')
          .set('Accept', 'application/json')
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.be.a('object');
            done();
          });
      });
    });
  });
});
