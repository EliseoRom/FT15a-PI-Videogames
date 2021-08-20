import React,{ useEffect }from "react";
import { Link, useParams } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { getVideogameDetail } from "../../actions/actions";
import s from "./GameDetail.module.css"
import Navbar from "../NavBar/NavBar"


 function GameDetail(props) {
    const {id}= useParams()
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideogameDetail(id)) // idVideogame le paso  mi actions (videogamDetail)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
       
    return (
        <div className={s.body4}>
          <Navbar/>
           <div className={s.containerdetail}>
                 {props.videogameDetail.length !== 0 ? 
                    <div> 
                            
                            <img clasName={s.image}src={props.videogameDetail.background_image} width="480" height="250" alt=""/>
                            <div> 
                            <div ><p>Name:</p><p>{props.videogameDetail.name}</p></div>
                            <div ><p>Genres:</p><p>{props.videogameDetail.genres.join(', ')}</p></div>
                            <div ><p>Platforms:</p><p>{props.videogameDetail.platforms? props.videogameDetail.platforms :  props.videogameDetail.platforms.map(plat => plat.name).join(', ') }</p></div>
                            <div ><p>Release Date:</p><p>{props.videogameDetail.releaseDate}</p></div>
                            <div ><p>Rating:</p><p>{props.videogameDetail.rating}</p></div>
    
                            <p>Description:</p>
                            <div dangerouslySetInnerHTML={{ __html: props.videogameDetail.description}}></div>
                            </div>
                   </div> :
                            <div><h1>Loading game...</h1>
                            <img src="https://i.pinimg.com/originals/1c/d5/80/1cd58046fd5c61ef6ad491edfb1e6093.gif" 
                            width="550" 
                            height="250" alt="LoadingGif" className='loadingGif'/></div>
    
                }<div>
                      
                             <Link to='/videogames'>
                         <button className={s.buttonback} >Back</button>
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