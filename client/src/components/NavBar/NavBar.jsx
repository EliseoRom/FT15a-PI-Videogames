import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./NavBar.module.css';
import Search from "../Search/Search";
//---------NAVBAR--------//
// Aparece en todas las / menos en Landing
export default function NavBar() {
    return ( 
        <header className={s.navBar}>
            
            <div>
                 <ul>
                     
                        <div><NavLink className={s.text}exact to="/" > START </NavLink>
                        <NavLink className={s.text}exact to="/videogames" > HOME </NavLink>
                        <NavLink className= {s.text} exact to="/createVideogame" > CREATE GAME</NavLink>
                        </div>
                        <Search />
                </ul>
            </div>
            <ul>
            </ul>
        </header>
    )
}