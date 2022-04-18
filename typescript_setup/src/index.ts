import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

import { getAllUsers } from './controllers/getAllUsers';
dotenv.config();

const app = express();

app.get('/', (req: Request, res: Response) => {
  getAllUsers(req, res);
});

const PORT = process.env.DEV_PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
