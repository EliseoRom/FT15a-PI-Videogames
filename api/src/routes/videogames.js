const { Videogame, Genre } = require("../db");
const router = require("express").Router();
const axios = require("axios");
const { API_KEY } = process.env;

require('dotenv').config();


// GET a '/videogames
router.get('/videogames', async (req, res) => {
    let videogamesDb = await Videogame.findAll({
        include: Genre
    });
    //Parseamos el objeto recibido de findAll porque es una referencia circular (?)
    videogamesDb = JSON.stringify(videogamesDb);
    videogamesDb = JSON.parse(videogamesDb);
    //Aca dejamos el arreglo de generos plano con solo los nombres de cada genero
    videogamesDb = videogamesDb.reduce((acc, el) => acc.concat({
        ...el,
        genres: el.genres.map(g => g.name)
    }), [])
// Me traigo los personajes por query (nombre en la URL)
// pregunto si hay un name por query y busco esa propiedad
    if (req.query.name) {
        try {
            let response = await axios.get(`https://api.rawg.io/api/games?search=${req.query.name}&key=${API_KEY}`);
            if (!response.data.count) return res.status(404).send(`No se encontro ningun videojuego con el nombre "${req.query.name}"`);
            response.data.results = response.data.results.reduce((acc, el) => acc.concat({
                ...el,
                genres: el.genres.map(g => g.name)
            }), [])
            const filteredGamesDb = videogamesDb.filter(g => g.name.toLowerCase().includes(req.query.name.toLowerCase()));
            // El nombre de la busqueda que llegue lo paso a miniscula .tolowerCase
            // . include me trae todo lo que incluya esos caracteres me hace una busque mas global
            const results = [...filteredGamesDb, ...response.data.results.splice(0, 15)];
            return res.json(results)
        } catch (err) {
            return console.log(err)
        }
    } else {
        try {
            let pages = 0;
            let results = [...videogamesDb];
            let response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
            while (pages < 4) {
                pages++;
                response.data.results = response.data.results.reduce((acc, el) => acc.concat({
                    ...el,
                    genres: el.genres.map(g => g.name)
                }), [])
                results = [...results, ...response.data.results]
                response = await axios.get(response.data.next)
            }
            return res.json(results)
        } catch (err) {
            console.log(err)
            return res.sendStatus(500)
        }
    }
})


module.exports = router;