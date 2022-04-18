import { Request, Response } from 'express';
import User from '../../models/User';

export const getAllUsers = async (request: Request, response: Response) => {
  response.statusCode = 200;
  const users = await User.find();
  response.send({ users });
};
