//------------ALL IMPORT------------//
import {GET_VIDEOGAMES, 
        SEARCH_BY_NAME, 
        GET_VIDEOGAME_DETAIL,
        FILTER_NAME, 
        FILTER_BY_GENRES, 
        FILTER_ORIGIN,
        BY_RATING,
        POST_GAME,   
       } from '../actions/actions';
// declaro/ la logica va antes del return
const initialState = {
    videogames: [],
    copyVideogames: [],
    videogameDetail: [], // definir  detail o show
    videogamesToShow: null,
    genres:[]
}
                                        // { } type  --->
function rootReducer (state = initialState, action, payload) {
 switch(action.type) {
     //voy a devolver todo lo que te mande la accion de GET_VIDEOGAMES
     case GET_VIDEOGAMES: return { 
        ...state,
        videogames: action.payload,
        copyVideogames: action.payload

    }
    // SEARCH NAME
    case SEARCH_BY_NAME: return {
        ...state,
        videogames: action.payload,
        copyVideogames: action.payload
    }
    // DETAIL GAME
    case GET_VIDEOGAME_DETAIL:
         return {
        ...state,
        videogameDetail: action.payload
    }  
    // aca 1  FILTER GENRES
    case FILTER_BY_GENRES: {
        // if (payload === "All games") return {...state, copyVideogames: null}
        return {
            ...state,
            genres: state.videogames.filter(e => e.genres.map((genre) => (genre.name)).includes(payload))
        }
    } 
    // aca 2 ORIGIN
    case FILTER_ORIGIN: {
        if (payload === "All games") return {...state, videogamesToShow: null}
        if (payload === "local") return {
            ...state,                     // el local como en el back models/videogames
            videogamesToShow: state.videogames.filter(e => e.local)
        }
        return {
            ...state,                      // nego lo anterior
            videogamesToShow: state.videogames.filter(e => !e.local)
        }
    } 
    // aca 3  filter NAME - 
    // ejecuto 2 .sort para comparar el orden the game(compara los valores y los ordena de a-z o z-a)
    case FILTER_NAME: {
        if (payload === "az") 
        return {
             ...state, videogames: [...state.videogames]
             .sort((game1, game2) => game1.name > game2.name ? 1 : -1) }
        return {
             ...state, videogames: [...state.videogames]
             .sort((game1, game2) => game1.name > game2.name ? -1 : 1) }
    } 
    // aca 4 filter RAITING
    case BY_RATING: {
        if (payload === "high") return {
             ...state, videogames: [...state.videogames]
             .sort((game1, game2) => game1.rating > game2.rating ? -1 : 1) }
        return {
             ...state, videogames: [...state.videogames]
             .sort((game1, game2) => game1.rating > game2.rating ? 1 : -1) }
    } // hacer otro case para raiting
     // POST NEW GAME
     case POST_GAME:
         return {
          ...state   
         }


    default: return {...state};
};
}

export default rootReducer;






// case STATUS:
//         const allCharacters = state.allCharacters;
//         const statusFilter = action.payload === 'All' ? allCharacters :
//         allCharacters.filter(i => i.status === action.payload)
//         return {
    //             ...state,
    //             characters: statusFilter
    //         }  


    // case FILTER_BY_GENRES: {
    //     if(!action.payload) 
    //     return { ...state,
    //          videogames: state.copyVideogames};
    //          return { ...state,
    //         videogames: state.copyVideogames.filter(e => e.genres.includes(action.payload))
    //     }
    // }