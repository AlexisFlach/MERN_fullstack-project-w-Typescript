import { Router } from 'express';
import { getAllAlbums, createAlbum, getAlbum } from '../../controllers/album';

const router = Router();

router.route('/').get(getAllAlbums);
router.route('/:id').get(getAlbum);
router.route('/').post(createAlbum);

export = router;
