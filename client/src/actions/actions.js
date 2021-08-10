import axios from 'axios';

// ACTION CREATORS
export function getVideoGames() {
    return function(dispatch) {
        return axios.get ('http://localhost:3001/videogames')
        .then((response) => {
            dispatch({ type: 'GET_VIDEOGAMES', payload: response.data});
            
        })
    }
}
export function searchByName(name) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        dispatch({ type: 'SEARCH_BY_NAME', payload: response.data });

    }
}
export function getVideogameDetail(id) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogame/${id}`); 
        dispatch({ type: GET_VIDEOGAME_DETAIL, payload: response.data });  // sino funciona sacar data
    }
}

export function filterByName(input) {
    return { type: FILTER_BY_NAME, payload: input };
}
export function filterByGenres(genres) {
    return { type: FILTER_BY_GENRES, payload: genres};

}

export const FILTER_BY_GENRES = 'FILTER_BY_GENRES'
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAMES_DETAIL = 'GET_VIDEOGAMES_DETAIL';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';