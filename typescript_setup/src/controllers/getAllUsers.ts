import { Request, Response } from 'express';
import { users } from '../db';

export const getAllUsers = (request: Request, response: Response) => {
  response.statusCode = 200;
  response.send({ users });
};
