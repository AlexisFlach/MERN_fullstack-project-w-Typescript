import { Router } from 'express';
import {
  createAlbum,
  deleteAlbum,
  getAlbum,
  getAllAlbums,
  updateAlbum,
} from '../../controllers/album';

const router = Router();

router.route('/').get(getAllAlbums);

router.route('/:id').get(getAlbum);

router.route('/').post(createAlbum);

router.route('/:id').put(updateAlbum);

router.route('/:id').delete(deleteAlbum);

export = router;
