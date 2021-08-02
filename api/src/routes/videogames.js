const { Videogame, Genre } = require('../db');
const router = require('express').Router();
const axios = require('axios').default;

let remainingGames = [];

module.exports = router;

