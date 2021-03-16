import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../../DB/DBconfig'

const getScheduleForMovie = async (req: Request, res: Response) => {
    try {
        const movie_id = req.params.movieId;
        const getSchedule = await pool.query('select * from schedule where movie_id=$1', [movie_id]);
        return res.status(200).json({
            message: 'Schedule for a movie',
            result: getSchedule.rows.length,
            data: {
                cast: getSchedule.rows
            }
        })
    }

    catch (err) {
        console.log(err)
    }

}

export default getScheduleForMovie;
