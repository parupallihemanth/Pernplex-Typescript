import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from "../../DB/DBconfig";

const deleteCast = async (req: Request, res: Response) => {
    try {
        const movie_id = req.params.movieId;
        const deletedCast = await pool.query('delete from cast_info where movie_id=$1 returning *', [movie_id]);
        return res.status(200).json({
            message: 'cast deleted successfully',
            result: deletedCast.rows.length,
            data: {
                cast: deletedCast.rows
            }
        })
    }
    catch (err) {
        console.log(err)
    }

}

export default deleteCast;