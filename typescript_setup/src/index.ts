import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/users';

import db from './config/db';
import cors from 'cors';

dotenv.config();

const router = express();

db.connect();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(cors());

router.use('/api/users', userRoutes);

const PORT = process.env.DEV_PORT || 5001;
router.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

export { router };
