import React from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../../logoHenry.png'
import './NavBar.module.css';
export default function NavBar() {
    return ( // de HW modificar
        <header className="navbar">
            <div>
                <img id="" src={'https://us.123rf.com/450wm/soifer/soifer1806/soifer180600033/103260319-vector-de-letrero-de-ne%C3%B3n-de-gamepad-y-smartphone-juegos-para-logotipo-de-tel%C3%A9fono-inteligente-emble.jpg?ver=6'} 
                width="100" 
                height="100" 
                className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                 <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/videogames" > Home </NavLink>
            
                        <NavLink to="/createVideogame" > Crear Game</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}