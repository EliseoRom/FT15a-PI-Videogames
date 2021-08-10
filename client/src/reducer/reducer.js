import { GET_VIDEOGAMES, SEARCH_BY_NAME, GET_VIDEOGAME_DETAIL, FILTER_BY_NAME, FILTER_BY_GENRES } from '../actions/actions';
// declaro 
const initialState = {
    videogames: [],
    copyVideogames: [],
    videogameDetail: []
}

function rootReducer (state = initialState, action) {
 switch(action.type) {
     case GET_VIDEOGAMES: return { //voy a devolver todo lo que te mande la accion de GET_VIDEOGAMES
        ...state,
        videogames: action.payload,
        copyVideogames: action.payload

    }
    case SEARCH_BY_NAME: return {
        ...state,
        videogames: action.payload,
        copyVideogames: action.payload
    }
    case GET_VIDEOGAME_DETAIL: return {
        ...state,
        videogameDetail: action.payload
    }
    case FILTER_BY_NAME: {
        return {
            ...state,
            videogames: state.copyVideogames.filter(e => e.name.toLowerCase().includes(action.payload.toLowerCase()) )
        }
    }
    case FILTER_BY_GENRES: {
        if(!action.payload) 
        return { ...state,
             videogames: state.copyVideogames};
        return { ...state,
            videogames: state.copyVideogames.filter(e => e.genres.includes(action.payload))
        }
    }
    default: return {...state};
 }
}

export default rootReducer;