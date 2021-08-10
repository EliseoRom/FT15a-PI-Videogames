import { useState, useEffect } from "react"
import axios from "axios"
//import {GET_VIDEOGAMES} from '../../actions/actions'




// <div> HOLIS SOY CARD </div>;

export default function Card() {
    const [videogames, setVideogames] = useState([])
    function getVideo() {
        return axios
        
        .get('http://localhost:3001/videogames')
        .then(videogames => setVideogames(videogames.data))
        
    }
    useEffect (() => {
        getVideo()
    }, []) 
    // que se ejecute apenas inicia []
    return <div> {videogames.map((videogames) => {
        return  <div>
               <p>{videogames.name}</p>
               <p>{videogames.id}</p>
               <img src= {videogames.background_image} 
               alt="https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"/>
               
               

        </div>
    })}</div>
}