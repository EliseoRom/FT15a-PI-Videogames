const { Videogame, Genre } = require('../db');
const router = require('express').Router();
const axios = require('axios').default;

let remainingGames = [];

router.get('/', async (req, res) => {
const { name } = req.query;
try {
    let callApi;
    let externalGame;
    let localGames;
    let totalGames;
    let returnedGames;
    if (name) {
        callApi = await axios.get(`${RAWGGAMES}?Key=${KEY}&search=${name}`);
        externalGame = await callApi.data.results
        localGames = await Videogame.findAll({
            where: { name: name},
            include: [{ model: Genre }],
        });
        externalGame = await externalGame && externalGame.map(game => ({
            id: game.id,
            name: game.name,
            dateToRelase: game.released,
            image: game.background_image,
            rating: game.rating,
            platforms: game.platforms,
            genres: game.genres
        }));
        totalGames = await [...localGames, ...externalGames]
        returnnedGames = totalGames.slice(0, 15)
        return res.json(returnedGames);
    };
    callApi = await axios.get(`${RAWGGAMES}?key=${KEY}`);
    externalGames = await callApi.data.results
    localGames = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['id', 'name'],
            through: { attributes: [] }
        }
    });
    externalGames = await externalGames && externalGames.map(game => ({
        id: game.name,
        name: game.name,
        dateToRelase: game.released,
        image: game.background_image,
        rating: game.rating,
        platforms: game.platforms,
        genres: game.genres
    }));
    totalGames = await [...localGames, ...externalGames]
    returnedGames = totalGames.slice(0, 15)
    return res.json(returnedGames);
} catch (error) {
    return res.status(404)
};
});

module.exports = router;

