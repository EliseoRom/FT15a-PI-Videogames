import axios from 'axios';


// ------------ACTIONS---CREATORS--------------//
export function getVideoGames() {
    return function(dispatch) {
        return axios.get ('/videogames')
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
       return axios.get(`/videogames?name=${name}`)
       .then((response) => {
         dispatch({
             type:'SEARCH_BY_NAME', 
             payload: response.data,
         })
    })}
} //...............DETAIL GAME....................
export function getVideogameDetail(id){
    return function (dispatch) {
        return fetch(`/videogame/${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({type:"GET_VIDEOGAME_DETAIL", payload:json})
        });
    };
}
//...............FILTER GENRE..................
export function filterByGenres(payload) {
    return { type: 'FILTER_BY_GENRES', payload };
}
//...............FILTER ORIGIN..................
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
//..................FILTER NAME................
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
   
 //..................FILTER RAITING................
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
   
} 

//.................... POST CREATE GAME.................
export function postGame(payload) {
    console.log(payload)
    return async function(dispatch) {
        const post = await axios.post('/video/create', payload)
        return {
            type:POST_GAME, 
            post
        }
    }
}
//....................GET GENRE.......................
export function getGenres(){
    return async function(dispatch){
      const info = await axios.get("/genres");
    return dispatch({
      type: GET_GENRE,
      payload: info.data
    });
   }
  }

//.........TODOS LOS FILTROS.........
export const FILTER_BY_GENRES = 'FILTER_BY_GENRES';
export const ORDER_ASC = "ORDER_ASC";
export const ORDER_DESC = 'ORDER_DESC';
export const RAITING_MAX = 'RAITING_MAX';
export const RAITING_MIN = 'RAITING_MIN';
export const GET_GENRE ='GET_GENRE';
//.........FILTER ORIGIN............
export const DB = "DB";
export const ALL = "ALL";
export const API = "API";
//........Create Game...............
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const  POST_GAME = "POST_GAME";
//---------SERCH ------------------
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
//-------DETAIL GAME---------------
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL';
