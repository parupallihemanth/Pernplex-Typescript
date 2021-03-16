import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../../DB/DBconfig';

const getAllMovies = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const moviesList: QueryResult = await pool.query('select * from movie_info')
        return res.status(200).json({
            message: 'movies list',
            result: moviesList.rows.length,
            data: {
                movies: moviesList.rows,
            }
        })
    }
    catch (err) {
        console.log(err)
    }
}

export default getAllMovies;