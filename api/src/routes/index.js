// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Router } = require('express');
const genresRoutes = require("./genres");
const videogamesRoutes = require("./videogames");
const videogameRoutes = require("./videogame");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/genres", genresRoutes);
router.use("/videogames", videogamesRoutes);
router.use("/videogame", videogameRoutes);

router.get('/', (_req, res) => {
    return res.send('Todo esta en orden!!! Segui codeando nomas...')
});


router.get('/genres', (_req, res) => {
    return res.send('Esta es la ruta genres dale nomasssssssssssssssssssss')
});

module.exports = router;
