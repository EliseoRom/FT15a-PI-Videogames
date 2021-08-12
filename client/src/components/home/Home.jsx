import React from "react";
import { connect, useSelector } from "react-redux";
import { useEffect } from "react";
//import axios from "axios"; useState,
import { getVideoGames } from "../../actions/actions";
import style from "./Home.module.css";
//import {useState, useEffect} from 'react';
//import {connect, useDispatch, useSelector} from 'react-redux';
//import Navbar from "../NavBar/NavBar";
import Card from "../Card/Card";
import { Fragment } from "react";
import {Link} from 'react-router-dom';

// --------->  <p>{videogames.platforms}</p>
// render home game
function Home({ getVideoGames, videogames }) {
  //const dispatch = useDispatch();
 const allVideogame = useSelector ((state) => state.videogame)
  useEffect(() => {
    getVideoGames();
  }, [getVideoGames]);
  
 // <Navbar />
  return (
    <div>
        <h1> GAME COLLECTION </h1>
      {videogames.map((videogame) => {
        return (
          <div>
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
                <option value='All'>Todos</option>
                <option value='created'>Creados</option>
                <option value='api'>Existente</option>
            </select>
            {
            allVideogame?.map((c) => {
              return (
             <Fragment>
                 <Link to={"/videogames" + c.id}>
                      <Card name={c.name} genre={c.genre} image={c.image} key={c.id} />
                    </Link>
            </Fragment>
           );
            })}

            <p>{videogame.name}</p>{" "}
            <div>
              <p>{videogame.genre}</p>
            </div>
            <div>
             
            </div>
            <div className={style.info}> </div>
            <img
              src={videogame.background_image}
              alt=""
              width="330px"
              height="150px"
            />
          </div>
        );
      })}
    </div>
  );
} // function HOME

function mapStateToProps(state) {
  return {
    videogames: state.videogames,
  };
}
function mapDispatchToProps(dispactch) {
  return {
    getVideoGames: (videogames) => dispactch(getVideoGames(videogames)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);







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
