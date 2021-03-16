import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../../DB/DBconfig'

const getCastForMovie = async (req: Request, res: Response) => {
    try {
        const movie_id = req.params.movieId;
        const movieCast = await pool.query('select * from cast_info where movie_id=$1', [movie_id]);
        return res.status(200).json({
            message: 'cast for a movie',
            result: movieCast.rows.length,
            data: {
                cast: movieCast.rows
            }
        })
    }

    catch (err) {
        console.log(err)
    }

}

export default getCastForMovie;
