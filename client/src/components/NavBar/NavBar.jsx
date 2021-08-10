import React from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../../logoHenry.png'
import './NavBar.css';
export default function NavBar() {
    return ( // de HW modificar
        <header className="navbar">
            <div>
                <img id="" src={''} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}