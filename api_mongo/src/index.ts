import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db';
import albumRoutes from './routes/album/album';
import artistRoutes from './routes/artist/artist';
import cors from 'cors';

const router = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use(cors());

router.use('/albums', albumRoutes);
router.use('/artists', artistRoutes);

const PORT = process.env.PORT || 5001;

router.listen(PORT, () => {
  console.log(`Server listens on ${PORT}`);
});
