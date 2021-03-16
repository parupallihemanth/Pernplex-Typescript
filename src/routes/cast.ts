import { Router } from 'express';
const router = Router();

import addCast from '../controllers/caste/addCast';
import getCastForMovie from '../controllers/caste/getCastForMovie';
import updateCast from '../controllers/caste/updateCast';
import deleteCast from '../controllers/caste/deleteCast';

router.get('/getcast/:movieId', getCastForMovie);
router.post('/newcast', addCast);
router.put('/:movieId', updateCast);
router.delete('/:movieId', deleteCast);

export default router;
