import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import {router as FilmRouter} from './routes/filmoviRoutes.js';

dotenv.config({path: './.env'});
const app = express();

//Middleware for CORS
app.use(cors());
//Middleware for parsing body data
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>A tek nam je poctak</h1>')
})

app.use('/api/v1/filmovi', FilmRouter)

export { app }