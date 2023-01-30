import { Router } from "express";
import * as C from "../controllers/movieController.js";
import * as Con from "../controllers/userController.js"
import {validateSchema}  from "../middleware/validateSchemaMiddleware.js";
import { signUpSchema } from "../model/userSchema.js";

const router = Router()

router.post("/movies", C.postNewMovie)
router.get("/movies", C.getMovies)
router.get("/movies/:id", C.getMoviesById)
// router.post("/movies/:id", C.status)
router.delete("/movies/:id", C.deleteMovie)
// router.get("/ranking", C.getRanking)
router.post("/signup", Con.postSignUp)

// router.post("/signup", validateSchema(signUpSchema), Con.postSignUp)

export default router
