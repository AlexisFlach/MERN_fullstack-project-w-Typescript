import express from 'express';
import { albumRoutes, artistRoutes } from './routes';

const router = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use('/albums', albumRoutes);
router.use('/artists/', artistRoutes);

const PORT = 4002;

router.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
