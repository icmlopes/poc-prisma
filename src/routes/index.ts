import { Router } from "express";
import * as C from "../controllers/movieController.js";

const router = Router()

// router.post("/movies", C.postNewMovie)
router.get("/movies", C.getMovies)
router.get("/movies/:id", C.getMoviesById)
// router.post("/movies/:id", C.status)
// router.delete("/movies/:id", C.deleteMovie)
// router.get("/ranking", C.getRanking)

export default router
