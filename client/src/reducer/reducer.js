//------------ALL IMPORT------------//
import {
  GET_VIDEOGAMES,
  SEARCH_BY_NAME,
  GET_VIDEOGAME_DETAIL,
  ORDER_ASC,
  ORDER_DESC,
  FILTER_BY_GENRES,
  RAITING_MAX,
  RAITING_MIN,
  GET_GENRE,
  DB,
  API,
  ALL,
  
} from "../actions/actions";
// declaro/ la logica va antes del return
const initialState = {
  videogames: [],
  copyVideogames: undefined,
  videogameDetail: [], // definir  detail o show
  videogamesToShow: null,
  genres: [],
  videogamesFiltro:[],
};
// { } type  --->
function rootReducer(state = initialState, action, payload) {
  switch (action.type) {
    //voy a devolver todo lo que te mande la accion de GET_VIDEOGAMES
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        copyVideogames: action.payload,
      };

      
    // ---------------------SEARCH NAME-----------------
    case SEARCH_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
        copyVideogames: action.payload,
      };
    //------------------- DETAIL GAME------------------
    case GET_VIDEOGAME_DETAIL:
      return {
        ...state,
        videogameDetail: action.payload,
      };
    // aca 1 -------------FILTER GENRES-------------------
    case FILTER_BY_GENRES: {
      if (!action.payload) return { ...state, videogames: state.copyVideogames };
      return {
          ...state,
          videogames: state.copyVideogames.filter(e => e.genres.includes(action.payload))
    }

    }
      case GET_GENRE: 
            return {
            ...state,
            genres:action.payload
       }
      
    // case--------------- FILTER_ORIGIN:--------------------
    case DB: return {
      ...state,
      // videogames: state.videogames.filter((b) => b.id.length > 6),
      videogames: state.videogames.filter((b) => b.db === true ),    
  };
     case API: return {
		...state,
    
  //  videogames: state.videogames.filter((b) => b.id.length < 1000),
	 videogames: state.videogames.filter((b) => !b.db),    
};
    case ALL: 
      return {
    ...state,
    videogames: state.videogames,
    
}
  // aca 3 ------------- FILTER NAME ------------
case ORDER_ASC: return{
        ...state,
        videogames: state.videogames
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
        
}
    case ORDER_DESC: return{
        ...state,
        videogames: state.videogames
		    .filter((b) => b.name !== null)
			.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
           
}
    // aca 4 --------------FILTER RAITING-----------
  case RAITING_MAX: return{
      ...state,
      videogames: state.videogames
      .filter((b) => b.rating !== null)
      .sort((a, b) => (a.rating > b.rating ? 1 : -1)),
      
      
 }
  case RAITING_MIN: return{
      ...state,
     videogames: state.videogames
      .filter((b) => b.rating !== null)
      .sort((a, b) => (a.rating < b.rating ? 1 : -1)),
     
  }
    
    
    //  case POST_GAME:
    //      return {
    //       ...state
    //      }

    default:
      return { ...state };
  }
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