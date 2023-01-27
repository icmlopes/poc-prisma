import { Request, Response } from "express"
import { Movie } from "../protocols/movieProtocol.js"
import { movieSchema } from "../model/movieSchema.js"
import * as R from "../repositories/movieRepository.js"
import { QueryArrayResult } from "pg"

// export async function postNewMovie(req: Request, res: Response) {

//     const newMovie = req.body as Movie

//     const { error } = movieSchema.validate(newMovie)

//     if (error) {
//         return res.status(400).send({
//             message: error.message
//         })
//     }

//     try {

//         await R.insertMovie(newMovie)

//     } catch (error) {
//         console.log(error);
//         return res.sendStatus(500)
//     }
//     res.sendStatus(200)
// }

export async function getMovies(req: Request, res: Response) {

    try {

        const existingMovies = await R.getAllMovies()

        return res.status(200).send(existingMovies)

    } catch (error) {
        console.log(error);
        return res.sendStatus(500)
    }
}

export async function getMoviesById(req: Request, res: Response) {
    const id = Number(req.params.id)

    try { 

        const getByid = await R.getMovieById(id)

        return res.status(200).send(getByid)

    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

// export async function status(req: Request, res: Response) {
//     const id = Number(req.params.id)
//     const getComment = req.body 

//     try{

//         const getMovieId = await R.getMovieById(id)

//         console.log("checking information:", getMovieId.rows)
//         console.log("Check if comment is comming:", getComment)

//         if (getMovieId.rowCount === 0){
//             return res.status(404).send("Filme não encontrado")
//         }

//         await R.updateStatus(getComment, id)

//         return res.sendStatus(200)

//     } catch(error){
//         console.log(error)
//         return res.sendStatus(500)
//     }

// }

// export async function deleteMovie(req: Request, res: Response){
//     const id = Number(req.params.id)

//     try{

//         const getMovieId = await R.getMovieById(id)

//         if (getMovieId.rowCount === 0){
//             return res.status(404).send("Filme não encontrado")
//         }

//         await R.deleteMovieById(id)

//         return res.status(200).send("Filme deletado com sucesso.")

//     } catch (error){
//         console.log(error)
//         return res.sendStatus(500)
//     }
// }

// export async function getRanking(req: Request, res: Response){

//     try{

//         const ranking = await R.platformCount()

//         if (ranking.rowCount === 0){
//             return res.sendStatus(404)
//         }
  
//         return res.status(200).send(ranking.rows)

//     } catch(error){
//         console.log(error)
//         return res.sendStatus(500)
//     }
// }