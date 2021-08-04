const { Videogame, Genre } = require('../db');
const router = require('express').Router();
const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

// ------- ROUTER-----GET----VIDEOGAME-----//

router.get('/:idGame', async(req, res) => {
    const {idGame } = req.params;
    try {
        let isLocal = idGame.slice(0, 5)
        if(isLocal == 'local') {
            Videogame.findByPk(idGame, {
                include: {
                    model: Genre,
                    attributes: ['id', 'name'],
                    though: { attributes:[] }
                }
            })
            .then(game => {
                return game ? res.json(game) : res.sendStatus(404);
            })
            .catch(err => res.status(500).send({ error: err }));
        }
        let callApi = await axios.get(`${RAWGGAMES}/${idGame}?key=${KEY}`);
        let externalGame = await callApi.data;

        externalGame = await externalGame && {
            id: externalGame.id,
            name: externalGame.name,
            description: externalGame.description,
            dateToRelase: externalGame.released,
            image: externalGame.background_image,
            rating: externalGame.rating,
            platforms: externalGame.platforms,
            genres: externalGame.genres,
            local: false
        };

    } catch {
        return res.status(404);
    };
});


//--------ROUTER----POST---VIDEOGAME-------//
router.post('/', async(req, res) => {
    try {
        const { name, genres, description, released, rating, plataforms, image } = req.body;
        const id = "local" + uuidv4();
        const newvideoGame = {id, name, description, released, rating, plataforms, image, local: true};
        const createGame = await Videogame.create(newvideoGame);

         // create game
         genres.forEach( async (genre) => {
             let genreDb = await Genre.findByPk(genre)
             createGame.setGenres(genreDb);
         });
         return res.send(createGame);
    } catch (err) {
        console.log(err)
    }
});


module.exports = router;

