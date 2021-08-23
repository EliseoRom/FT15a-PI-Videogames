import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import Search from "../Search/Search";
//---------NAVBAR--------//
// Aparece en todas las / menos en Landing
export default function NavBar() {
  return (
    <div className={s.navBar}>
      <ul className={s.ulNav}>
        <li>
          <NavLink className={s.text} exact to="/">
            START
          </NavLink>
          <NavLink className={s.text} exact to="/videogames">
            HOME
          </NavLink>
          <NavLink className={s.text} exact to="/createVideogame">
            CREATE GAME
          </NavLink>
        </li>
        <li>
          <Search />
        </li>
      </ul>
    </div>
  );
}
