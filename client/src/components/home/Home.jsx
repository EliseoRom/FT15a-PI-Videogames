import React from "react";
import { useEffect, useState } from "react";
import { getVideoGames, filterByGenres, filterOrigin, filterName } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "./Paginado";
import style from "./Home.module.css";
import Search from "../Search/Search";
//import { connect} from "react-redux";
//import {useState, useEffect} from 'react';
//import Navbar from "../NavBar/NavBar";
// import Card from "../Card/Card";
// import { Fragment } from "react";
// import {Link} from 'react-router-dom';

      //--------HOME------//

function Home() {
      //-----PAGINADO-----//

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
    // el paginado solo funciona en el home por eso no lo modularizo 
    indexFirstCharacter,
    indexLastCharacter
  );
   // seteo la pagina en
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  useEffect(() => {
    dispatch(getVideoGames());
  }, [dispatch]);
   //------------------------FUNCTION FILTER------------------------// 
// accedo a los paylod del select que renderizo con el e target value
// el valor que le paso a mi value tiene que coincidir con el del back de la api
function handleFilterGenre(e){
  e.preventDefault()
dispatch(filterByGenres(e.target.value));
}
function handlefilterOrigin(e) {
  e.preventDefault()
  dispatch(filterOrigin(e.target.value));
}
function handleFilterName(e) {
  e.preventDefault()
  dispatch(filterName(e.target.value));
  setCurrentPage(1);
  //setOrden(`Ordenado ${e.target.value}`)

}



  return (
    <div className={style.s}>
      <div className={style.info}></div>
      <h1> GAME COLLECTION </h1>
                         <Search/>
                         <span>Order Name </span>
      <select id="order" onChange={(e) => handleFilterName(e)}> 
                
                    <option value="Default">Default</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
      </select>
      <div>
                      <span>  Filter Genres  </span>

      <select id='genres' onChange={(e) => handleFilterGenre(e)}>
                    <option value="All games">Every Games</option>
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
                    <option value="Massively Multiplayer">Massively Multiplayer</option>
                    <option value="Sports">Sports</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Family">Family</option>
                    <option value="Board Games">Board Games</option>
                    <option value="Educational">Educational</option>
                    <option value="Card">Card</option>
        </select>
        </div>
     <div>
                   <span> Filter Origin </span>
      <select id="origin"onChange={(e)=> handlefilterOrigin(e)}>
                <option value="All games">All Games</option>
                <option value="local"> Local Games</option> 
                <option value="external"> External Games</option> 
      </select> 
      </div>
      <div>
                         <span>Order Rating </span>
                
                <select>
                    <option value="Default">Default</option>
                    <option value="high">Highest Rated</option>
                    <option value="less">Less Rated</option>
                </select>
            </div>

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

// ACA TENGO UN COMPONENTE  <Navbar />



// set anterior por las dudas
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
