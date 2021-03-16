import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from "../../DB/DBconfig";

const updateCast = async (req: Request, res: Response) => {
    try {
        const movie_id = req.params.movieId;
        const { movie_cast } = req.body;
        const updatedCast = await pool.query('update cast_info set movie_cast=$1 where movie_id=$2 returning *', [movie_cast, movie_id]);
        return res.status(200).json({
            message: 'cast updated successfully',
            result: updatedCast.rows.length,
            data: {
                cast: updatedCast.rows
            }
        })
    }
    catch (err) {
        console.log(err)
    }

}

export default updateCast;