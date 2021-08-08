import { GET_VIDEOGAMES, SEARCH_BY_NAME, GET_VIDEOGAME_DETAIL, FILTER_BY_NAME } from '../actions/actions';
// declaro 
const initialState = {
    videogames: undefined,
    copyVideogames: undefined,
    videogameDetail: undefined
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
    default: return state;
 }
}

export default rootReducer;