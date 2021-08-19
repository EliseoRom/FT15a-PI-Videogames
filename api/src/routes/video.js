// Renderizar la ruta id, y la ruta post
const { Router } = require('express');
const { Videogame, Genre } = require('../db');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const { API_KEY } = process.env;
const router = Router();

// Traigo lo juegos por ID 
// http://localhost:3001/videogame/1
// GET /videogame/:idVideoGame
router.get('/:idVideogame', async (req, res) => {
    const { idVideogame } = req.params
    if (idVideogame.includes('-')) {
        let videogameDb = await Videogame.findOne({
            where: {
                id: idVideogame,
            },
            include: Genre
        })
        videogameDb = JSON.stringify(videogameDb);
        videogameDb = JSON.parse(videogameDb);
        videogameDb.genres = videogameDb.genres.map(g => g.name);
        res.json(videogameDb)
    };

    try {
        const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
        let { name, background_image, genres, description, released: releaseDate, rating, platforms } = response.data;
        genres = genres.map(g => g.name);
        platforms = platforms.map(p => p.platform.name);
        return res.json({
            name,
            background_image,
            genres,
            description,
            releaseDate,   // forma de acceder a la informacion
            rating,
            platforms
        })
    } catch (err) {
        return console.log(err)
    }
})
// POST AL FRONT---> CREATED GAME
// router.post('/videogame', async(req, res, next) => {
//     const {
//         name, 
//         description, 
//         releaseDate, 
//         rating, 
//         platforms, 
//         // image,
//         genres
//     } = req.body
//     try{
//     const videogameCreated = await Videogame.create({ 
//         id:uuidv4(),
//         name: name,
//         description:description, 
//         releaseDate:releasedDate, 
//         rating: rating, 
//         platforms: platforms,
//         // image: image,
//         db: true,
//     })
//     // let genreDb = await Genre.findAll({
//     //     where: {name: genre}
//     // })
//     await videogameCreated.addGenres(genres)
//     if(videogameCreated){
//     return res.json({message:'Videogame created succesfully', data:videogameCreated})
//     }
// }catch (err) {
//     next(err);
// }
// })


// router.post('/videogames', async  (req, res) => {
    
//     const { name, rating, platforms, description, image, genres, releaseDate } = req.body;
//     try {
        
//         let dbGame = await Videogame.create({
//             name: name,
//             description: description,
//             image: image,
//             rating: rating,
//             platforms: platforms,
//             releaseDate: releaseDate,
//             db: true,
//         })
//         await dbGame.setGenres(genres)
//         return res.json(dbGame)
//     } catch (error) {
//         console.log(error)
//     }
// })


// router.post('/', async (req, res) => {
    
//     // me traigo todas las caracteristicas del body
//     const { name, description, releaseDate, rating, genres, platforms, image } = req.body; //  image
//     platforms = platforms.join(', ')
//     try {
//         const gameCreated = await Videogame.findOrCreate({
//             where: {
//                 id: uuidv4(),
//                 name: name,
//                 description: description,
//                 releaseDate: releaseDate,
//                 rating: rating,
//                 platforms: platforms,
//                 image:  image
//             }
//         })
//         await gameCreated[0].setGenres(genres);
//     } catch (err) {
//         console.log(err);
//     }
//     res.send('Fue creado correctamente')
// })


 module.exports = router;