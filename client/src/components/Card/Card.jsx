import { useState, useEffect } from "react";
import axios from "axios";
//import {GET_VIDEOGAMES} from '../../actions/actions'
import './Card.module.css';
// <div> HOLIS SOY CARD </div>;

export default function Card() {
  const [videogames, setVideogames] = useState([]);
  function getVideo() {
    return axios

      .get("http://localhost:3001/videogames")
      .then((videogames) => setVideogames(videogames.data));
  }
  useEffect(() => {
    getVideo();
  }, []);
  // que se ejecute apenas inicia []
  // --------->  <p>{videogames.platforms}</p>
  return (
    <div>
      {"Video Games Collection"}
      {videogames.map((videogames) => {
        return (
          <div>
            <p>{videogames.name}</p>
            <p>{videogames.id}</p>
            <p>{videogames.released}</p>
            <img
              src={videogames.background_image}
              alt="https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
              width="350px"
              height="250px"
            />
          </div>
        );
      })}
    </div>
  );
}
