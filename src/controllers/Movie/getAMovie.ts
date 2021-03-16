import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../../DB/DBconfig';

const getAMovie = async (req: Request, res: Response): Promise<Response | undefined> => {
    const movie_id = req.params.id;
    try {
        const movie: QueryResult = await pool.query('select * from movie_info where movie_id = $1', [movie_id]);
        return res.status(200).json({
            message: 'Requested movie',
            result: movie.rows.length,
            data: {
                movies: movie.rows
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}

export default getAMovie;