import React from 'react';
import {Link} from 'react-router-dom';
//import style from './LandinPage.css'

export default function LandinPage() {
    return (
        <div>
            <h1> Bienvedios a mi pagina de games !!! </h1>
            <Link to = '/videogames'>
                <button > Ingresar </button>
            </Link>
        </div>
        

    )

}