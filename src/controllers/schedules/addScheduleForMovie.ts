import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../../DB/DBconfig'

const addScheduleForMovie = async (req: Request, res: Response) => {
    try {
        const { movie_shows, movie_id } = req.body;
        const newSchedule = await pool.query('insert into schedule(movie_shows, movie_id) VALUES($1, $2) returning *', [movie_shows, movie_id]);
        return res.status(200).json({
            message: 'Show timings addedd successfully',
            result: newSchedule.rows.length,
            data: {
                showTimings: newSchedule.rows
            }
        })
    }

    catch (err) {
        console.log(err)
    }
}

export default addScheduleForMovie;