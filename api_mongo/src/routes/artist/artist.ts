import { Router } from 'express';
import {
  getAllArtists,
  createArtist,
  getArtist,
  addAlbumToArtist,
} from '../../controllers/artist';

const router = Router();

router.route('/').get(getAllArtists);
router.route('/:id').get(getArtist);
router.route('/:id/albums').post(addAlbumToArtist);
router.route('/').post(createArtist);

export = router;
