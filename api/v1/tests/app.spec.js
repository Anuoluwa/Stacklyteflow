// import express from 'express';
import request from 'supertest';
// import { expect } from 'chai';
// import questions from '../models/db';
import app from '../index';


// const api = 'localhost:3000/api/v1';

describe('Integrationtesting with supertest for requestController', () => {
  // describe('Integrationtesting with supertest for requestController', () => {
  //   describe('GET /questions', () => {
  //     it('respond with json', async () => {
  //       const response = await api.get('/questions')
  //         .set('Content-Type', 'application/json');
  //       expect(response).to.have.status(200);
  //     });
  //   });
  // });
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
