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

// // GET a '/videogames
// router.get('/videogames', async (req, res) => {
//     let videogamesDb = await Videogame.findAll({
//         include: Genre
//     });
//     //Parseamos el objeto recibido de findAll porque es una referencia circular (?)
//     videogamesDb = JSON.stringify(videogamesDb);
//     videogamesDb = JSON.parse(videogamesDb);
//     //Aca dejamos el arreglo de generos plano con solo los nombres de cada genero
//     videogamesDb = videogamesDb.reduce((acc, el) => acc.concat({
//         ...el,
//         genres: el.genres.map(g => g.name)
//     }), [])
// // Me traigo los personajes por query (nombre en la URL)
// // pregunto si hay un name por query y busco esa propiedad
//     if (req.query.name) {
//         try {
//             let response = await axios.get(`https://api.rawg.io/api/games?search=${req.query.name}&key=${API_KEY}`);
//             if (!response.data.count) return res.status(404).send(`No se encontro ningun videojuego con el nombre "${req.query.name}"`);
//             response.data.results = response.data.results.reduce((acc, el) => acc.concat({
//                 ...el,
//                 genres: el.genres.map(g => g.name)
//             }), [])
//             const filteredGamesDb = videogamesDb.filter(g => g.name.toLowerCase().includes(req.query.name.toLowerCase()));
//             // El nombre de la busqueda que llegue lo paso a miniscula .tolowerCase
//             // . include me trae todo lo que incluya esos caracteres me hace una busque mas global
//             const results = [...filteredGamesDb, ...response.data.results.splice(0, 15)];
//             return res.json(results)
//         } catch (err) {
//             return console.log(err)
//         }
//     } else {
//         try {
//             let pages = 0;
//             let results = [...videogamesDb];
//             let response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
//             while (pages < 4) {
//                 pages++;
//                 response.data.results = response.data.results.reduce((acc, el) => acc.concat({
//                     ...el,
//                     genres: el.genres.map(g => g.name)
//                 }), [])
//                 results = [...results, ...response.data.results]
//                 response = await axios.get(response.data.next)
//             }
//             return res.json(results)
//         } catch (err) {
//             console.log(err)
//             return res.sendStatus(500)
//         }
//     }
// })
// // GET /videogame/:idVideoGame
// router.get('/videogame/:idVideogame', async (req, res) => {
//     const { idVideogame } = req.params
//     if (idVideogame.includes('-')) {
//         let videogameDb = await Videogame.findOne({
//             where: {
//                 id: idVideogame,
//             },
//             include: Genre
//         })
//         videogameDb = JSON.stringify(videogameDb);
//         videogameDb = JSON.parse(videogameDb);
//         videogameDb.genres = videogameDb.genres.map(g => g.name);
//         res.json(videogameDb)
//     };

//     try {
//         const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
//         let { name, background_image, genres, description, released: releaseDate, rating, platforms } = response.data;
//         genres = genres.map(g => g.name);
//         platforms = platforms.map(p => p.platform.name);
//         return res.json({
//             name,
//             background_image,
//             genres,
//             description,
//             releaseDate,   // forma de acceder a la informacion
//             rating,
//             platforms
//         })
//     } catch (err) {
//         return console.log(err)
//     }
// })
// hasta aca videogame //
//GET a /genres
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
// //POST a /videogame
// router.post('/videogame', async (req, res) => {
//     // me traigo todas las caracteristicas del body
//     let { name, description, releaseDate, rating, genres, platforms, image } = req.body; //  image
//     platforms = platforms.join(', ')
//     try {
//         const gameCreated = await Videogame.findOrCreate({
//             where: {
//                 name,
//                 description,
//                 releaseDate,
//                 rating,
//                 platforms,
//                 image
//             }
//         })
//         await gameCreated[0].setGenres(genres);
//     } catch (err) {
//         console.log(err);
//     }
//     res.send('Fue creado correctamente')
// })

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// const { Router } = require('express');
// const genresRoutes = require("./genres");
// const videogamesRoutes = require("./videogames");
// const videogameRoutes = require("./videogame");

// const router = Router();

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);
// router.use("/genres", genresRoutes);
// router.use("/videogames", videogamesRoutes);
// router.use("/videogame", videogameRoutes);


// router.get('/', (_req, res) => {
//     return res.send('Todo esta en orden!!! Segui codeando nomas...')
// });

// router.get('/idgenres', (_req, res) => {
//     return res.send('Esta es la ruta genres dale nomasssssssssssssssssssss')
// });
// router.get('/idvideogames', (_req, res) => {
//     return res.send('Esta es la ruta VIDEO-GAMES dale nomasssssssssssssssssssss')
// });
// router.get('/idvideogame', (_req, res) => {
//     return res.send('Esta es la ruta VIDEO_GAME dale noma')
// });

// module.exports = router;
