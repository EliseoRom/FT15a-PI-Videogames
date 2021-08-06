require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default; 
const { Videogame, Genre } = require('../db');
 
const genreRoute = require('./genres')
const videogamesRoute = require('./videogames')
const videogameRoute = require('./videogame')

router.use('/genres', genreRoute)
router.use('/videogames', videogamesRoute)
router.use('/videogame', videogameRoute)

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


module.exports = router;



