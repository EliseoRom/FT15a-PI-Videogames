import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./NavBar.module.css';
import Search from "../Search/Search";
//---------NAVBAR--------//
// Aparece en todas las / menos en Landing
export default function NavBar() {
    return ( // de HW modificar
        <header className={s.navBar}>
            
            <div>
                 <ul className="list">
                     
                        <div><NavLink className={s.text}exact to="/" > START </NavLink>
                        <NavLink className={s.text}exact to="/videogames" > HOME </NavLink>
                        <NavLink className= {s.text} exact to="/createVideogame" > CREATE GAME</NavLink>
                        </div>
                        <Search />
                </ul>
            </div>
            <ul>
            <div>
                <img src={'https://us.123rf.com/450wm/soifer/soifer1806/soifer180600033/103260319-vector-de-letrero-de-ne%C3%B3n-de-gamepad-y-smartphone-juegos-para-logotipo-de-tel%C3%A9fono-inteligente-emble.jpg?ver=6'} 
                width="120" 
                height="130" 
                className= "" alt="" />
            </div>
            </ul>
        </header>
    )
}