import { QueryResult } from "pg";
import { Movie } from "../protocols/movieProtocol.js";
import prisma from "../database/db.js";


// export async function insertMovie(movie: Movie): Promise<QueryResult>{
//     console.log(movie)
//    return await connection.query(`
//     INSERT INTO movie (title, genres, platform, watched, comment) VALUES ($1, $2, $3, false, null)`, [movie.title, movie.genres, movie.platform])
// }

export async function getAllMovies(){
    return prisma.movie.findMany();
}

export async function getMovieById(id: number){
    return prisma.movie.findFirst()
}

// export async function getMovieById(id: number): Promise<QueryResult<string[]>>{
//     return await connection.query(`
//     SELECT * FROM movie WHERE id = $1`, [id] )
// }

// export async function updateStatus(comment: string, id: number): Promise<QueryResult>{
//     return await connection.query(`UPDATE movie SET watched = true, comment = $1 WHERE id = $2
//     `, [comment, id])
// }

// export async function deleteMovieById(id: number): Promise<QueryResult>{
//     return await connection.query(`
//     DELETE FROM movie WHERE id = $1
//     `, [id])
// }

// export async function platformCount():Promise<QueryResult<string[]>>{
//     return await connection.query(`
//     SELECT platform, COUNT(*) FROM movie GROUP BY platform ORDER BY count DESC`)
// }