import { Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../../models/User';

export const createUser = async (request: Request, response: Response) => {
  const { name } = request.body;

  const user = new User({
    id: new mongoose.Types.ObjectId(),
    name,
  });

  await user.save();

  response.statusCode = 201;

  response.send(user);
};
