import React,{ useEffect }from "react";
//import {useParams} from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';

import { getVideogameDetail } from "../../actions/actions";


//import s from "./GameDetail.module.css"
//import Navbar from "../NavBar/NavBar"

 function GameDetail(props) {
    const {id}= useParams()
    const dispatch = useDispatch();
    

    // const params = useParams();
    // const { idVideogame} = params
    // useSelector(state => state.videogameDetail)

    useEffect(() => {
        dispatch(getVideogameDetail(id)) // idVideogame le paso  mi actions (videogamDetail)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
       
    return (
        <div className= 'body4'>
           <div className='containerdetail'>
        
     
                    
                     {props.videogameDetail.length !== 0 ? 
                        <div> 
                            
                            <img src={props.videogameDetail.background_image} width="360" height="240" alt=""/>
                            <div> 
                            <div ><p>Name:</p><p>{props.videogameDetail.name}</p></div>
                            <div ><p>Genres:</p><p>{props.videogameDetail.genres.join(', ')}</p></div>
                            <div ><p>Platforms:</p><p>{props.videogameDetail.platforms? props.videogameDetail.platforms :  props.videogameDetail.platforms.map(plat => plat.name).join(', ') }</p></div>
                            <div ><p>Release Date:</p><p>{props.videogameDetail.releaseDate}</p></div>
                            <div ><p>Rating:</p><p>{props.videogameDetail.rating}</p></div>
                            </div>
                            </div> : <h1>Cargando game...</h1>
    
                    }<div>
                             <Link to='/videogames'>
                         <button className='buttonback' >Back</button>
                             </Link>
          
                                  </div>
             </div>
        </div>
            
        )
        
    }
    function mapStateToProps(state) {
        return {
          videogameDetail: state.videogameDetail,
          
        };
      }
      
      function mapDispatchToProps(dispatch) {
        return {
          // eslint-disable-next-line no-undef
          getVideogameDetail: GameDetails => dispatch(getVideogameDetail(GameDetails)),
          
        };
      }
      
      export default connect( mapStateToProps, mapDispatchToProps)(GameDetail);