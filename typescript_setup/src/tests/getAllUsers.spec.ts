import { Request, Response } from 'express';
import { getAllUsers } from '../controllers/getAllUsers';

describe('Get all users request', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseObject = {};

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementation((result) => {
        responseObject = result;
      }),
    };
  });

  test('200 - users', async () => {
    const expectedStatusCode = 200;
    const expectedReponse = {
      users: [
        {
          id: 1,
          name: 'Alex',
        },
        {
          id: 2,
          name: 'Lars',
        },
      ],
    };

    getAllUsers(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.statusCode).toBe(expectedStatusCode);
    expect(responseObject).toEqual(expectedReponse);
  });
});
