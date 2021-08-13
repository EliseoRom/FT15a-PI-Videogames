import React from "react";
import { useEffect, useState } from "react";
import { getVideoGames } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "./Paginado";

//import { connect} from "react-redux";
//import style from "./Home.module.css";
//import {useState, useEffect} from 'react';
//import Navbar from "../NavBar/NavBar";
// import Card from "../Card/Card";
// import { Fragment } from "react";
// import {Link} from 'react-router-dom';

// Render home game
// TENGO QUE MOSTRAR NOMBRE GENERO E IMAGEN
function Home() {
           //---PAGINADO----//

  const dispatch = useDispatch();
  const allVideo = useSelector((state) => state.videogames);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(9); // lo que se muestra en pagina
  // const [order, setOrder] = useState('')
  const indexLastCharacter = currentPage * charactersPerPage; // el ultimo indice (posittion) el game que renderizo
  const indexFirstCharacter = indexLastCharacter - charactersPerPage; // resto los caracteres qe muetro por pagina  9
  const currentCharacters = allVideo.slice(
    //esta const me guarda cuales son los games que tengo que renderizar dependiendo de la pagina
    // el indice del primer game y ultimo 
    indexFirstCharacter,
    indexLastCharacter
  );
   // seteo la pagina en
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //--------------Home------- ------------//
  useEffect(() => {
    dispatch(getVideoGames());
  }, [dispatch]);

  // <Navbar />
  return (
    <div>
      <h1> GAME COLLECTION </h1>
      

      <select>
        <option value="asc"> Ascendente </option>
        <option value="desc"> Descentente </option>
      </select>
      <select>
        <option value="4">Action</option>
        <option value="51">Indie</option>
        <option value="3">Adventure</option>
        <option value="5">RPG</option>
        <option value="10">Strategy</option>
        <option value="2">Shooter</option>
        <option value="40">Casual</option>
        <option value="14">Simulation</option>
        <option value="7">Puzzle</option>
        <option value="11">Arcade</option>
        <option value="83">Platformer</option>
        <option value="1">Racing</option>
        <option value="59">Massively Multiplayer</option>
        <option value="15">Sports</option>
        <option value="6">Fighting</option>
        <option value="19">Family</option>
        <option value="28">Board Games</option>
        <option value="34">Educational</option>
        <option value="17">Card</option>
      </select>
      <select>
        <option value="All">Todos</option>
        <option value="created">Creados</option>
        <option value="api">Existente</option>
      </select>

      <Paginado
        charactersPerPage={charactersPerPage}
        allCharacters={allVideo.length}
        paginado={paginado}
      />

      {currentCharacters.map((videogame) => {
        return (
          
          <div>
               <p>{videogame.name}</p>
               <p>{videogame.genres}</p>
               
             <div>

             </div>
            <img
              src={videogame.background_image}
              alt="holaaa no se muestra esto"
              width="330px"
              height="170px"
            ></img>
            
          </div>
        );
      })}
    </div>
  );
} //  finish function HOME


export default Home;






// function mapStateToProps(state) {
//   return {
//     videogames: state.videogames,
//   };
//}
// function mapDispatchToProps(dispactch) {
//   return {
//     getVideoGames: (videogames) => dispactch(getVideoGames(videogames)),
//   };
//}


// <div className={style.cards}>
//                 {
//                     juegos && juegos.map((juego,i)=>{
//                         return <Card key={i}
//                         id={juego.id}
//                         name={juego.name}
//                         genres={juego.genres}
//                         image={juego.image}
//                         />
//                     })
//                 }
//  </div>
