import {Film} from "../models/filmModel.js";

const prikaziPoslednjihPet = async (req, res, next) => {
    req.query.sort = 'title';
    req.query.limit = '15';
    next();
}

const prikaziNajboljihPetOcenjenih = async (req, res, next) => {
    req.query.sort = '-rating';
    req.query.limit = '5';
    next();
}

const prikaziFilmove = async (req, res) => {
    try {
        const query = Film.find({});

        if (req.query.sort) {
            query.sort(req.query.sort);
        }

        if (req.query.limit) {
            query.limit(parseInt(req.query.limit, 10));
        }

        const filmovi = await query;

        res.status(200).json({
            status: 'success',
            results: filmovi.length,
            data: {
                filmovi
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

const prikaziFilm = async (req, res) => {
    try {
        const { slug } = req.params;
        const film = await Film.findOne({slug})

        if(!film){
            return res.status(404).json({
                status: 'fail',
                message: 'Film nije pronadjen.'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                film
            }
        })
    } catch {
        res.status(500).json({
            status: 'fail',
            message: 'Greska tokom pretrage filma.'
        })
    }
}

const dodajFilm = async (req, res) => {
    try {
        const noviFilm = await Film.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                noviFilm
            }
        })
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

export {dodajFilm, prikaziFilmove, prikaziPoslednjihPet, prikaziFilm, prikaziNajboljihPetOcenjenih}