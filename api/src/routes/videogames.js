const { Videogame, Genre } = require("../db");
const router = require("express").Router();
const axios = require("axios").default;

let remainingGames = [];


//----------ROUTER------------GET-------------//

router.get('/', async (req, res) => {
  const { name } = req.query;
  try {
    let callApi;
    let externalGames;
    let localGames;
    let totalGames;
    let returnedGames;
    if (name) {
      callApi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
      externalGames = await callApi.data.results
      localGames = await Videogame.findAll({
        where: {
          name: name
        },
        include: [{
          model: Genre,
        }],
      });
      externalGames = await externalGames && externalGames.map(game => ({
        id: game.id,
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
    };



    callApi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    externalGames = await callApi.data.results
    localGames = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        }
      }
    });

    externalGames = await externalGames && externalGames.map(game => ({
      id: game.id,
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



router.get('/:page', async (req, res) => {
  let { page } = req.params;
  if (page <= 1) return res.redirect('/videogames');
  try {
    if (remainingGames>=15) {
      let returnedGames = remainingGames.slice(0, 15);
      remainingGames = remainingGames.slice(15, remainingGames.length);
      return res.json(returnedGames);
    }
    
    let callApi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    let externalGames = await callApi.data.results;

    externalGames = await externalGames && externalGames.map(game => ({
      id: game.id,
      name: game.name,
      dateToRelase: game.released,
      image: game.background_image,
      rating: game.rating,
      platforms: game.platforms,
      genres: game.genres
    }));

    remainingGames = [...remainingGames, ...externalGames];
    let returnedGames = remainingGames.slice(0, 15);
    remainingGames = remainingGames.slice(15, remainingGames.length);
    return res.json(returnedGames);
  } catch (error) {
    return res.status(404);
  };
});


module.exports = router;