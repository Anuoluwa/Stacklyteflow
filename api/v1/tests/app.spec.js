// import express from 'express';
import request from 'supertest';
// import question from '../models/db';
import app from '../index';
// import Question from '../controllers/questionController';


describe('Integrationtesting with supertest for requestController', () => {
  describe('GET /questions', () => {
    it('respond with json', (done) => {
      request(app)
        .get('/api/v1/questions')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
});
