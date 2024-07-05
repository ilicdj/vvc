import {app} from "../app.js";
import express from "express";
import {
    dodajFilm,
    prikaziFilmove,
    prikaziPoslednjihPet,
    prikaziFilm, prikaziNajboljihPetOcenjenih
} from "../controllers/filmController.js";

const router = express.Router();

router.route('/').get(prikaziFilmove).post(dodajFilm)
router.route('/last-15').get(prikaziPoslednjihPet, prikaziFilmove)
router.route('/top-rated').get(prikaziNajboljihPetOcenjenih, prikaziFilmove)
router.route('/random-movie').get(prikaziFilmove)
router.route('/:slug').get(prikaziFilm)

export { router }