import { Router } from 'express';
import {
  deleteArtist,
  getAllArtists,
  getArtist,
  updateArtist,
  addAlbumToArtist,
  createArtist,
} from '../../controllers/artist';

import { verifyData } from '../../middlewares';

const router = Router();

router.route('/').get(getAllArtists);

router.route('/:id').get(getArtist);

router.route('/').post(verifyData, createArtist);

router.route('/:id').put(updateArtist);

router.route('/:id').delete(deleteArtist);

router.route('/:id/albums').post(addAlbumToArtist);

export = router;
