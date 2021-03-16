import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from "../../DB/DBconfig";

const updateScheduleForMovie = async (req: Request, res: Response) => {
    try {
        const { movie_shows, movie_id } = req.body;
        const updatedSchedule = await pool.query('update schedule set movie_shows=$1 where movie_id=$2 returning *', [movie_shows, movie_id]);
        return res.status(200).json({
            message: 'Show timings updated successfully',
            result: updatedSchedule.rows.length,
            data: {
                schedule: updatedSchedule.rows
            }
        })
    }
    catch (err) {
        console.log(err)
    }

}

export default updateScheduleForMovie;