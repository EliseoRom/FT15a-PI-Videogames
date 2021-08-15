import axios from 'axios';
// import { GET_VIDEOGAMES } from '.././constantes'

// ------------ACTIONS---CREATORS--------------//
//Conecto el Front con el Back

export function getVideoGames() {
    return function(dispatch) {
        return axios.get ('http://localhost:3001/videogames')
        .then((response) => {
            dispatch({ 
                type: 'GET_VIDEOGAMES',
                 payload: response.data
            });
            
        })
    }
} //  search name function
export function searchByName(name) {
    return  function (dispatch) {
       return axios.get(`http://localhost:3001/videogames?name=${name}`)
       .then((response) => {
         dispatch({
             type:'SEARCH_BY_NAME', 
             payload: response.data,
         })
    })}
} // detalles game nueva /ruta
// export function getVideogameDetail(id) {
//     return async function (dispatch) {
//         const response = await axios.get(`http://localhost:3001/videogame/${id}`); 
//         dispatch({ type: GET_VIDEOGAME_DETAIL, payload: response.data });  // sino funciona sacar data
//     } minuto 14 repaso
// }   // con async await // con promesas 
export function getVideogameDetail(id){
    return function (dispatch) {
        return fetch(`http://localhost:3001/videogame/${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({type:"GET_VIDEOGAME_DETAIL", payload:json})
        });
    };
}
//  aca 1        filtrado x  genre o genres
export function filterByGenres(genres) {
    return { type: 'FILTER_BY_GENRES', payload: genres };
}
// Aca 2 todos existentes o agregados
export function filterOrigin(origin) {
    return { type: 'FILTER_ORIGIN', payload: origin };
} // aca 3  name
export function filterName(order) {
    return { 
        type: 'FILTER_NAME',
         payload: order
    };
} // aca 4 Raiting 
export function sortByRating(order) {
    return { type: 'BY_RATING', payload: order };
}
//  4  GAME FILTER EXPORT
export const FILTER_ORIGIN = 'FILTER_ORIGIN';
export const FILTER_BY_GENRES = 'FILTER_BY_GENRES';
export const FILTER_NAME = 'FILTER_NAME';
export const BY_RATING = 'BY_RATING';


export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';

export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';

export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL';

// export const GET_VIDEOGAMES_DETAIL = 'GET_VIDEOGAMES_DETAIL';