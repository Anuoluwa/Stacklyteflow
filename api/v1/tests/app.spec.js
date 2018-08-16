// import express from 'express';
import request from 'supertest';
// import express from 'express';
// import { expect } from 'chai';
// import questions from '../models/db';
import app from '../../../server';


// const api = 'localhost:3000/api/v1';

describe('Integrationtesting with supertest for requestController', () => {
  describe('GET /questions', () => {
    // it('respond with json', async () => {
    //   request(app)
    //     .get('/api/v1/questions')
    // });
  });
  describe('GET /questions', () => {
    it('respond with json', (done) => {
      request(app)
        .get('/api/v1/questions')
        .set('Content-Type', 'application/json');
      done();
    });
  });
  describe('GET /user/:id', () => {
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
});
