import request from 'supertest';
import { Request, Response } from 'express';
import { router } from '../index';
import db from '../config/db';
import { createUser } from '../controllers/users';
import User from '../models/User';

const agent = request.agent(router);

beforeAll(async () => await db.connect());
afterEach(async () => await db.clear());
afterAll(async () => await db.close());

describe('users', () => {
  describe('POST /users', () => {
    it('successful', async () => {
      const res = await agent.post('/api/users').send({ name: 'alex' });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toBeTruthy();
    });
    it('insert and get user', async () => {
      const mockRequest = {
        body: {
          name: 'VeeryWeirdNome',
        },
      } as Request;

      const mockResponse: any = {
        json: jest.fn(),
        statusCode: jest.fn(),
        send: jest.fn(),
      };
      const rest = await createUser(mockRequest, mockResponse);

      const res = await User.findOne({ name: 'VeeryWeirdNome' });
      expect(res).toBeTruthy();
    });
  });
});
