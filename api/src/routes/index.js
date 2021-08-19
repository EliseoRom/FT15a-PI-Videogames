require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default; 
const { Videogame, Genre } = require('../db');
 
const genreRoute = require('./genres')
const videogamesRoute = require('./videogames')
const videoRoute = require('./video')

router.use('/genres', genreRoute)
router.use('/videogames', videogamesRoute)
router.use('/videogame', videoRoute)
// VIDEO ES POST Y DETAIL
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


module.exports = router;



