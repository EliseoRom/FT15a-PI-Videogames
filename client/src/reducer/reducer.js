//-------------------------------------ALL IMPORT-----------------------------------//
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

const initialState = {
  videogames: [],
  copyVideogames: undefined,
  videogameDetail: [],
  videogamesToShow: [],
  genres: [],
  videogamesFiltro:[],
};

function rootReducer(state = initialState, action, payload) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        videogamesToShow: action.payload,
        
      };

      
    // ---------------------SEARCH NAME-----------------
    case SEARCH_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
        videogamesToShow: action.payload,
      };
    //-------------------- DETAIL GAME------------------
    case GET_VIDEOGAME_DETAIL:
      return {
        ...state,
        videogameDetail: action.payload,
      };
    // aca 1 -------------FILTER GENRES-------------------
    case FILTER_BY_GENRES: {
      if (!action.payload) return { ...state, videogamesToShow: state.videogamesToShow };
      return {
          ...state,
          videogamesToShow: state.videogames.filter(e => e.genres.includes(action.payload))
    }
}
      case GET_GENRE: 
            return {
            ...state,
            genres:action.payload
    }
      //------------------ FILTER_ORIGIN:--------------------
    case DB: return {
        ...state,
     
      videogamesToShow:state.videogames.filter((b) => b.db ),    
  };
    case API: return {
      ...state,
    
	  videogamesToShow: state.videogames.filter((b) => !b.db),    
};
    case ALL: return {
    ...state,
    videogamesToShow: state.videogames,
  
}
//------------- FILTER NAME------------
case ORDER_ASC: return{
        ...state,
        videogamesToShow: state.videogamesToShow
        .filter((b) => b.name !== null)
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
        
}
    case ORDER_DESC: return{
        ...state,
        videogamesToShow: state.videogamesToShow
		    .filter((b) => b.name !== null)
			.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
           
}
//----------------FILTER RAITING-----------
  case RAITING_MAX: return{
      ...state,
      videogamesToShow: state.videogamesToShow
      .filter((b) => b.rating !== null)
      .sort((a, b) => (a.rating > b.rating ? 1 : -1)),
      
 }
  case RAITING_MIN: return{
      ...state,
      videogamesToShow: state.videogamesToShow
      .filter((b) => b.rating !== null)
      .sort((a, b) => (a.rating < b.rating ? 1 : -1)),
     
  }
    

    default:
      return { ...state };
  }
}

export default rootReducer;