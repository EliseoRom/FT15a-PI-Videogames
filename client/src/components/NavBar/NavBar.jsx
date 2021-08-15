import React from 'react';
import { NavLink } from 'react-router-dom';
//import s from './NavBar.module.css';
import Search from "../Search/Search";
//---------NAVBAR--------//
// Aparece en todas las / menos en Landing
export default function NavBar() {
    return ( // de HW modificar
        <header className="list">
            <div>
                <img id="" src={'https://us.123rf.com/450wm/soifer/soifer1806/soifer180600033/103260319-vector-de-letrero-de-ne%C3%B3n-de-gamepad-y-smartphone-juegos-para-logotipo-de-tel%C3%A9fono-inteligente-emble.jpg?ver=6'} 
                width="100" 
                height="100" 
                className= "myClassNames " alt="" />
            </div>
            <nav>
                 <ul className="list">
                     
                        <div><NavLink className= 'back' exact to="/" > LANDING </NavLink></div>
                        <NavLink className= 'home' exact to="/videogames" > HOME </NavLink>
                        <div className> </div>
                        <NavLink className= 'create' exact to="/createVideogame" > CREATE GAME</NavLink>
                        <Search/>
                </ul>
            </nav>
        </header>
    )
}