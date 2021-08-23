import React from "react";
import { useEffect, useState } from "react";
import {
  getVideoGames,
  filterOrigin,
  filterName,
  sortByRating,
  getGenres,
  filterByGenres,
} from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "./Paginado";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/NavBar";

//----------------------HOME-----------------------------//

function Home() {
  //--------------------PAGINADO---------------------------//
  const dispatch = useDispatch();
  //const genres= useSelector((state) => state.genres )
  const allVideo = useSelector((state) => state.videogamesToShow);
  const [currentPage, setCurrentPage] = useState(1);
  const [videojuegosPerPage] = useState(9); // lo que se muestra en pagina
  //const [order, setOrder] = useState('')
  //let [filterGen, setFilterGen] = useState('');
  //const [order, setOrder] = useState("")
  const indexLastCharacter = currentPage * videojuegosPerPage; // el ultimo indice (posittion) el game que renderizo
  const indexFirstCharacter = indexLastCharacter - videojuegosPerPage; // resto los caracteres qe muetro por pagina  9
  const currentCharacters = allVideo.slice(
    //esta const me guarda cuales son los games que tengo que renderizar dependiendo de la pagina
    // el indice del primer game y ultimo
    // el paginado solo funciona en el home por eso no lo modularizo
    indexFirstCharacter,
    indexLastCharacter
  );
  // seteo la pagina en
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getGenres());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(getVideoGames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //------------------------FUNCTION FILTER------------------------//
  // accedo a los paylod del select que renderizo con el e target value
  // el valor que le paso a mi value tiene que coincidir con el del back de la api
  function handleFilterGenre(e) {
    //e.preventDefault();
    dispatch(filterByGenres(e.target.value));
  }
  function handleFilterOrigin(e) {
    e.preventDefault();
    dispatch(filterOrigin(e.target.value));
  }
  function handleFilterName(e) {
    e.preventDefault();
    dispatch(filterName(e.target.value));
    setCurrentPage(1);

    //setOrder(`Ordenado ${e.target.value}`);
  }
  function handleFilterRaiting(e) {
    e.preventDefault();
    dispatch(sortByRating(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div className={style.se}>
      <header className={style.headers}>
        <Navbar />
      </header>

      <div>
        <div className={style.titulofede}>
          <h1 className={style.title}> GAME COLLECTION </h1>
          <div>
            <div className={style.boton}>
              <span>Order Name </span>
              <select id="order" onChange={(e) => handleFilterName(e)}>
                <option value="Default">Default</option>
                <option value="ORDER_ASC">A-Z</option>
                <option value="ORDER_DES">Z-A</option>
              </select>
            </div>
            <div className={style.boton}>
              <label htmlFor="genres">
                <span>Filter Genres</span>
              </label>
              <select
                id="genres"
                onChange={(e) => handleFilterGenre(e)}
                className=""
              >
                <option value="">Default</option>
                <option value="Action">Action</option>
                <option value="Indie">Indie</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Strategy">Strategy</option>
                <option value="Shooter">Shooter</option>
                <option value="Casual">Casual</option>
                <option value="Simulation">Simulation</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Arcade">Arcade</option>
                <option value="Platformer">Platformer</option>
                <option value="Racing">Racing</option>
                <option value="Massively Multiplayer">
                  Massively Multiplayer
                </option>
                <option value="Sports">Sports</option>
                <option value="Fighting">Fighting</option>
                <option value="Family">Family</option>
                <option value="Board Games">Board Games</option>
                <option value="Educational">Educational</option>
                <option value="Card">Card</option>
              </select>
            </div>

            <div className={style.boton}>
              <span>Filter Raiting </span>

              <select onChange={(e) => handleFilterRaiting(e)}>
                <option value="All">Default</option>
                <option value="RAITING_MAX">Raiting Max</option>
                <option value="RAITING_MIN">Raiting Min</option>
              </select>
            </div>
            <div className={style.boton}>
              <span> Filter Origin </span>
              <select onChange={(e) => handleFilterOrigin(e)}>
                <option value="ALL">All Games</option>
                <option value="DB"> DB GAMES</option>
                <option value="API"> API GAMES</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <Paginado
            videojuegosPerPage={videojuegosPerPage}
            allCharacters={allVideo.length}
            paginado={paginado}
          />
        </div>
      </div>
      <div className={style.divgames}>
        {currentCharacters.map((videogame, index) => {
          return (
            <div key={index} className={style.cardgeneral}>
              <Link to={`/videogames/${videogame.id}`}>
                <p className={style.gametitle}>{videogame.name}</p>
              </Link>

              <p className={style.generotitle}>{videogame.genres}</p>
              <img
                className={style.card}
                src={videogame.background_image}
                alt=""
                width="300px"
                height="170px"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
//  finish function HOME
export default Home;
