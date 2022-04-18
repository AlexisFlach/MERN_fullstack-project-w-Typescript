import { Router, Response, Request, NextFunction } from 'express';

export const verifyData = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.body.name) {
    res.status(500).send({ message: 'error occured when creating artist' });
  } else {
    next();
  }
};
