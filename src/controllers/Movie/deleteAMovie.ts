import { Request, Response } from 'express';
import { Pool } from 'pg';

import { pool } from '../../DB/DBconfig';

const deleteAMovie = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const movie_id = req.params.id;
        const deletedMovie = await pool.query('delete from movie_info where movie_id=$1 returning *', [movie_id]);
        return res.status(200).json({
            message: 'Movie deleted successfully',
            result: deletedMovie.rows.length,
            data: {
                movie: deletedMovie.rows
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}

export default deleteAMovie;