const { Genre } = require("../db");
const router = require("express").Router();

router.get("/", function (_req, res) {
  Genre.findAll({})
    .then((genres) => {
      return genres.map((genre) => ({
        id: genre.id,
        name: genre.name,
      }));
    })
    .then((filtered) => res.json(filtered))
    .catch((err) => res.status(500).send("Se rompio todo"));
});

router.get("/:idGenre", function (req, res) {
  let { idGenre } = req.params;
  Genre.findByPk(idGenre)
    .then((genre) => (genre ? res.json(genre) : res.sendStatus(404)))
    .catch((err) => res.status(500).send("De nuevo rompiste todo man "));
});

module.exports = router;
