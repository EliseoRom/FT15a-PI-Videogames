import React from "react";
import { useEffect, useState } from "react";
import { getVideoGames, filterOrigin, filterName, sortByRating, getGenres, filterByGenres } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "./Paginado";
import style from "./Home.module.css";
//import Search from "../Search/Search";
import { Link } from "react-router-dom";

//import { connect} from "react-redux";
//import {useState, useEffect} from 'react';
import Navbar from "../NavBar/NavBar";
// import Card from "../Card/Card";
// import { Fragment } from "react";
// import {Link} from 'react-router-dom';

      //--------HOME------//

function Home() {
      //-----PAGINADO-----//
      const dispatch = useDispatch();
      //const genres= useSelector((state) => state.genres )
      const allVideo = useSelector((state) => state.videogames);
      const [currentPage, setCurrentPage] = useState(1);
      const [charactersPerPage] = useState(9); // lo que se muestra en pagina
      //const [order, setOrder] = useState('')
      //let [filterGen, setFilterGen] = useState('');
  //const [order, setOrder] = useState("")
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
function handleFilterGenre(e){
  //e.preventDefault();
dispatch(filterByGenres(e.target.value));
//setFilterGen(e.target.value);
}
function handlefilterOrigin(e) {
  e.preventDefault()
  dispatch(filterOrigin(e.target.value));
  setCurrentPage(1);
}
function handleFilterName(e) { // A z 
  e.preventDefault()
  dispatch(filterName(e.target.value));
  setCurrentPage(1);
  
  //setOrder(`Ordenado ${e.target.value}`);
}
function handleFilterRaiting(e) { // A z 
  e.preventDefault()
  dispatch(sortByRating(e.target.value));
  setCurrentPage(1);
  
 // setOrder(`Ordenado ${e.target.value}`);
}


  return (
    <div className={style.s}>
      <Navbar/>
      <div className={style.info}></div>
      <h1> GAME COLLECTION </h1>
                        
                         <span>Order Name </span>
      <select id="order" onChange={(e) => handleFilterName(e)}> 
                
                    <option value="Default">Default</option>
                    <option value="ORDER_ASC">A-Z</option>
                    <option value="ORDER_DES">Z-A</option>
      </select>
      
     <div>
                   <span> Filter Origin </span>
      <select onChange={(e)=> handlefilterOrigin(e)}>
                <option value="ALL">All Games</option>
                <option value="DB"> Local Games</option> 
                <option value="API"> External Games</option> 
      </select> 
     </div>
     <div className=''>
                <label htmlFor="genres">
                    <span className=''>Filter by Genres</span>
                </label>
                <select id='genres' onChange={(e) => handleFilterGenre(e)} className=''>
                    <option value=''>Default</option>
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
      {/* <div>
        
                       <spam>Fiter Genre</spam>
          <select onChange={(e) => handleFilterGenre(e)} value={filterGen} name='genre'>
                   */}
                    {/* <option default value="All"></option>  */}

                      {/* {genres.map((e) => (
            <option key={e.id} value={e.name}>  {e.name} </option>
    
            ))}
          </select>
         
        </div> */}
              <div>
                         <span>Filter Raiting </span>
                
                <select onChange={(e) => handleFilterRaiting(e)}>
                    <option value="All">Default</option>
                    <option value="RAITING_MAX">Raiting Max</option>
                    <option value="RAITING_MIN">Raiting Min</option>
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
                 <Link to={`/videogames/${videogame.id}`}>
                  <p className="Game-Name">{videogame.name}</p>
                  
                  </Link>
              
               <p>{videogame.genres}</p>
               <img
               src={videogame.background_image}
               alt=""
               width="300px"
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

/* <div>
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
        </div> */