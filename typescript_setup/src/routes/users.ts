import { Router } from 'express';
import { getAllUsers, createUser } from '../controllers/users/';

const router = Router();

router.route('/').get(getAllUsers);
router.route('/').post(createUser);

export = router;
