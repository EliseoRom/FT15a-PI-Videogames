/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');
const agent = session(app);

const videogame = {
  name: 'Super Mario Bros',
  description: "The objective is to race through the Mushroom Kingdom, survive the main antagonist Bowser's forces, and save Princess Toadstool.[6]:7 The game is a side-scrolling platform game; the player moves to the right to reach the flagpole at the end of each level.",
  platforms: ["Atari 2600", "Nintendo Switch"],
  id: "testVideogames"

};
xdescribe('Videogame routes', () => {

  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));

xdescribe('GET /videogames', () => {
    it('Deberia tener el estado 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
xdescribe('GET /', function(){
    it('Deberia tener el estado 200', () =>{
      agente.get('/').expect(200);
    });
  });

xdescribe('GET /:idVideogame', ()=>{
    it('Deberia obtener el estado 404', ()=> {
      agent.get('/fdfrtrtrtrhnadaasd')
      .expect(404);
    });
    it('Deberia tener el estado 200 si', ()=>{
      agent.get('/:idGame/5').expect(200);
    });
  });
  
xdescribe('GET /videogames?name={name}', () => {
    it('Deberia obtener el estado 200', () =>
      agent.get('/videogames?name=mario').expect(200)
    );
    it('should get a 15 results', () =>
      agent.get('/videogames?name=mario')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          expect(res.body).length(15);
        })
    );
  })

xdescribe('GET /genres', () => {
    it('Deberia obtener el estado 200', () =>
      agent.get('/genres').expect(200)
    );
  });

xdescribe('POST /create', ()=>{
    it('Deberia obtener el estado 302', ()=>{
      agent.post('/create')
      .send({
        name: 'Lineage',
        description:'Estrategia',
        platforms: ['PC']
      })
      .expect(302);
    });
    it('Debe ingresar un juego en la base de datos', ()=>{
      agent.post('/create')
      .send({
        name:'Soy un Game nuevo',
        description: 'Te desafio a ganar las partidas',
        platforms: ['PC']

      })
      .then(()=> {
        Videogame.findOne({
          where: {
            name: 'Soy un Game nuevo'
          }
        });
      })
      .then(game => {
        expect(game).to.exist;
      })
    })
  })
});
