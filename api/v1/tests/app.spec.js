import { expect } from 'chai';
import request from 'supertest';
// import express from 'express';
// import { expect } from 'chai';
// import questions from '../models/db';
import app from '../../../server';


// const api = 'localhost:3000/api/v1';

describe('Integrationtesting with supertest for requestController', () => {
  describe('GET /questions', () => {
    it('respond with json', (done) => {
      request(app)
        .get('/api/v1/questions')
        .set('Content-Type', 'application/json')
        .expect(200);
      done();
    });
  });
  describe('GET /questions', () => {
    it('respond with json', (done) => {
      request(app)
        .get('/api/v1/questions')
        .set('Content-Type', 'application/json');
      done();
    });
  });
  describe('GET /questions', () => {
    it('respond with json user not found', (done) => {
      request(app)
        .get('api/v1/questions/idisnonexisting')
        .set('Accept', 'application/json')
        // .expect('Content-Type', /json/)
        .expect(404) // expecting HTTP status code
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });
  describe('GET /api/questions/:id, a question', () => {
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
});
