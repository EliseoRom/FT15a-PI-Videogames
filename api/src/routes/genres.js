// // // RENDERIZO LA RUTA GENRES
// const { Genre } = require("../db");
// require('dotenv').config();
// const { API_KEY } = process.env;
// const { Router } = require('express');
// const router = Router();
// const axios = require('axios').default; 

// //const { Videogame, Genre } = require('../db');


// //GET a /genres
// router.get('/genres', async (req, res) => {
//     const genresDb = await Genre.findAll();
//     if (genresDb.length) return res.send(`Ya existen generos en la Base de Datos, longitud: ${genresDb.length}`)

//     const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
//     const genres = response.data.results;
//     genres.forEach(async g => {
//         await Genre.findOrCreate({ // se fija si esta, en el caso que este no lo crea. Si no esta lo crea
//             where: {name: g.name}
//         }) 
//     }) 
    
//     res.json(genres)
// })
// module.exports = router;