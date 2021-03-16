import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from "../../DB/DBconfig";

const deleteScheduleForMovie = async (req: Request, res: Response) => {
    try {
        const movie_id = req.params.movieId;
        const deletedSchedule = await pool.query('delete from schedule where movie_id=$1 returning *', [movie_id]);
        return res.status(200).json({
            message: 'schedule deleted successfully',
            result: deletedSchedule.rows.length,
            data: {
                cast: deletedSchedule.rows
            }
        })
    }
    catch (err) {
        console.log(err)
    }

}

export default deleteScheduleForMovie;