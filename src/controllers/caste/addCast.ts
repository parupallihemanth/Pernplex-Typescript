import { Request, Response } from 'express';
import { } from 'pg';

import { pool } from '../../DB/DBconfig';

const addCast = async (req: Request, res: Response) => {
    try {
        const { movie_cast, movie_id } = req.body;
        // const movie_id = req.params.id;
        const newCast = await pool.query('insert into cast_info(movie_cast, movie_id) values($1,$2) returning *', [movie_cast, movie_id]);
        return res.status(200).json({
            message: 'Cast added successfully',
            result: newCast.rows.length,
            data: {
                cast: newCast.rows
            }
        })
    }
    catch (err) {
        console.log(err);
    }

}

export default addCast;