import { Router } from 'express';
const router = Router();

import createAMovie from '../controllers/Movie/createAMovie';
import getAllMovies from '../controllers/Movie/getAllMovies';
import getAMovie from '../controllers/Movie/getAMovie';
import updateAMovie from '../controllers/Movie/updateAMovie';
import deleteAMovie from '../controllers/Movie/deleteAMovie';

router.post('/create', createAMovie);
router.get('/allmovies', getAllMovies);
router.get('/getamovie/:id', getAMovie);
router.put('/update/:id', updateAMovie);
router.delete('/delete/:id', deleteAMovie);

export default router;