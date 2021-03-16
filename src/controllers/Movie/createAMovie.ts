import { Request, Response } from "express";
import { QueryResult } from 'pg';

import { pool } from "../../DB/DBconfig";

const createAMovie = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const { movie_name, movie_languages, movie_genre, movie_rating, movie_duration } = req.body;
        const newMovie: QueryResult = await pool.query('Insert into movie_info(movie_name,movie_languages, movie_genre, movie_rating, movie_duration) values($1, $2, $3,$4,$5) returning *', [movie_name, movie_languages, movie_genre, movie_rating, movie_duration]);
        return res.status(200).json({
            message: 'Movie created successfully',
            results: newMovie.rows.length,
            data: {
                movies: newMovie.rows,
            }
        })
    } catch (err) {
        console.log(err);
    }
}

export default createAMovie;