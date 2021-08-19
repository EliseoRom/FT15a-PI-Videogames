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
} //............SEARCH NAME FUNCTION..............
export function searchByName(name) {
    return  function (dispatch) {
       return axios.get(`http://localhost:3001/videogames?name=${name}`)
       .then((response) => {
         dispatch({
             type:'SEARCH_BY_NAME', 
             payload: response.data,
         })
    })}
} //...............DETAIL GAME....................
export function getVideogameDetail(id){
    return function (dispatch) {
        return fetch(`http://localhost:3001/videogame/${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({type:"GET_VIDEOGAME_DETAIL", payload:json})
        });
    };
}
//  aca 1 ..............FILTER GENRE..................
export function filterByGenres(payload) {
    return { type: 'FILTER_BY_GENRES', payload };
}
// Aca 2...............FILTER ORIGIN..................
// return { type: 'FILTER_ORIGIN', payload: origin };
export function filterOrigin(value) {
    if (value === 'DB') {
		return {
			type: 'DB',
		};
	} else if (value === 'API'){
		return {
			type: 'API',
		};
	}else if (value === 'ALL') {
		return {
            type: 'ALL'
        }
} 
}
// aca 3 ...................FILTER NAME................
export function filterName(value) {
       if (value === 'ORDER_ASC') {
            return {
                type: 'ORDER_ASC',
            };
        } else {
            return {
                type: 'ORDER_DESC',
            };
        }
    }
   
 // aca 4.................FILTER RAITING................
export function sortByRating(value) {
    if (value === 'RAITING_MAX') {
        return {
            type: 'RAITING_MAX',
        };
    } else {
        return {
            type: 'RAITING_MIN',
        };
    }
    // return { type: 'BY_RATING', payload: order };
} 

//.................... POST CREATE GAME.................
export function postGame(payload) {
    console.log(payload)
    return async function(dispatch) {
        const post = await axios.post('http://localhost:3001/video/create', payload)
        return {
            type:POST_GAME, 
            post
        }
    }
}
// export function createVideogame(obj) {
//     return (dispatch) =>
//         axios.post('http://localhost:3001/videogame', obj)
//         .then((res) => {
//           dispatch({type: CREATE_VIDEOGAME, payload: res.data});
//         });
// }

export function getGenres(){
    return async function(dispatch){
      const info = await axios.get("http://localhost:3001/genres");
    return dispatch({
      type: GET_GENRE,
      payload: info.data
    });
   }
  }

//   TODOS LOS FILTROS
export const FILTER_BY_GENRES = 'FILTER_BY_GENRES';
export const ORDER_ASC = "ORDER_ASC";
export const ORDER_DESC = 'ORDER_DESC';
export const RAITING_MAX = 'RAITING_MAX';
export const RAITING_MIN = 'RAITING_MIN';
export const GET_GENRE ='GET_GENRE';
export const DB = "DB";
export const ALL = "ALL";
export const API = "API";
// Create Game
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const  POST_GAME = "POST_GAME";
// SERCH 
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
// DETAIL GAME
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL';
