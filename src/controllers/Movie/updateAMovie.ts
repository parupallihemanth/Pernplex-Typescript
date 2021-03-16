import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../../DB/DBconfig';

const updateAMovie = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const movie_id = req.params.id;
        const { movie_name, movie_languages, movie_genre, movie_rating, movie_duration } = req.body;
        const updatedMovie = await pool.query('update movie_info SET movie_name = $1,movie_languages =$2, movie_genre=$3, movie_rating=$4, movie_duration=$5 where movie_id=$6 returning *', [movie_name, movie_languages, movie_genre, movie_rating, movie_duration, movie_id]);
        return res.status(200).json({
            message: 'movie updated successfully',
            result: updatedMovie.rows.length,
            data: {
                movie: updatedMovie.rows
            }
        })
    }
    catch (err) {
        console.log(err)
    }
}

export default updateAMovie;