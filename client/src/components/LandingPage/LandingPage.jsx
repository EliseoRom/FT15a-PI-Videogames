import React from 'react';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';


// Pagina de inicio / me lleva a mi home llamado /videogames
export default function LandinPage() {
    return (
        <div className={style.s}>
            <h2 className={style.info}>Welcome the world of Video Game</h2>
            <div className={style.info}>
                <Link to='/videogames'>
                    <button className={style.boton}>START</button>
                </Link>
            </div>
        </div>
        

    )

}
            // <Link to = '/videogames'>
            //     <button > Ingresar </button>
            // </Link>