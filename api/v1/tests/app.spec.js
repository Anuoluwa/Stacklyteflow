import 'babel-polyfill';
import { expect } from 'chai';
import request from 'supertest';
import app from '../../../server';
// import should from 'chai/should'


describe('Test suite for question controller', () => {
  describe('GET /questions, for all questions in the endpoint', () => {
    it('get all question and respond with json', async () => {
      request(app);
      const response = await app.get('/api/v1/questions')
        .set('Content-Type', 'application/json');
      expect(response).to.have.status(200);
    });
    it('respond with json', (done) => {
      request(app)
        .get('/api/v1/questions')
        .set('Content-Type', 'application/json')
        .expect(200);
      done();
    });
    it('respond with json', (done) => {
      request(app)
        .get('/api/v1/questions')
        .set('Content-Type', 'application/json');
      done();
    });
  });
  describe('GET /questions/:id, for single question resource', () => {
    it('should be an object with keys and values', (done) => {
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
  });
  describe('POST /questions/, to post single question resource', () => {
    describe('POST /users', () => {
      it('should be an object with keys and values', (done) => {
        request(app)
          .get('/api/v1/question/1')
          .set('Accept', 'application/json')
          .expect(200)
          .send({
          })
          .end((err, res) => {
            expect(res.body.id).to.equal(undefined);
            expect(res.body.title).to.equal(undefined);
            expect(res.body.body).to.equal(undefined);
            expect(res.body.answers).to.equal(undefined);
            done();
          });
      });
      it('responds with json', (done) => {
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
  });
});
