import { Router } from 'express';
const router = Router();

import addScheduleForMovie from '../controllers/schedules/addScheduleForMovie';
import getScheduleForMovie from '../controllers/schedules/getScheduleForMovie';
import updateScheduleForMovie from '../controllers/schedules/updateScheduleForMovie';
import deleteScheduleForMovie from '../controllers/schedules/deleteScheduleForMovie';

router.get('/getschedule/:movieId', getScheduleForMovie);
router.post('/newSchedule', addScheduleForMovie);
router.put('/:movieId', updateScheduleForMovie);
router.delete('/:movieId', deleteScheduleForMovie);

export default router;
