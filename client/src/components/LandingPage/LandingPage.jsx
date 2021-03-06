import React from 'react';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';


// Pagina de inicio / me lleva a mi home llamado /videogames
export default function LandinPage() {
    return (
        <div className={style.s}>
            <h2 className={style.text}>Welcome the world of Video Game</h2>
            <div className={style.info}>  
                <Link to='/about'>
                    <button className={style.boton2}>ABOUT</button>
                </Link>
                </div>
            <div className={style.info}>
                <div> 
                <Link to='/videogames'>
                    <button className={style.boton}>START</button>
                </Link>
                </div>
            </div>
        </div>
        

    )

}
