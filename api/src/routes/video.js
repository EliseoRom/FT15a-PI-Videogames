// Renderizar la ruta id, y la ruta post
const { Router } = require('express');
const { Videogame, Genre } = require('../db');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const { API_KEY } = process.env;
const router = Router();

// Traigo lo juegos por ID 
// http://localhost:3001/videogame/1
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
            releaseDate,   // forma de acceder a la info
            rating,
            platforms
        })
    } catch (err) {
        return console.log(err)
    }
})

 module.exports = router;