//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//       API           (| 0_0 |)
//      VIDEO          0\  =  /0
//     GAMES :D       ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "". 
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// const Videogame = require('./src/models/Videogame.js');
// const axios = require('axios').default;
// require("dotenv").config()

//const PORT = process.env.PORT || 3001
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {  
  // en TRUE se velvan a cargar en la base de datos cada vez que levanto corto el servidor
  // en FALSE quedan cargada  la BD
  console.log('La coneccion con la base de datos si es correcta')
  server.listen(process.env.PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});


//app.listen(PORT,() => console.log(`Listening in port${PORT}`))


// del lado del cliente -----> react redux
// del lado del servidor localhost: 3001
// get /Videogame
// ------fetch a la api de games en mi base de datos ----> res . send()

