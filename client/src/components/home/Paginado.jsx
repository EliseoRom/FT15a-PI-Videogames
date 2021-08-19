import s from './Paginado.module.css';
import React from 'react';

export default function Paginado ({charactersPerPage, allCharacters, paginado}){
    const pageNumbers = []
       // voy a dividir todos los personajes por pagina que quiero
    for (let i=1; i<=Math.ceil(allCharacters/charactersPerPage); i++) {
        pageNumbers.push(i) // para que la pagina comience en  1 let i=1
    }
    return(
        <nav className={s.pagination}>
            <ul className={s.item}>
               {pageNumbers && pageNumbers.map(number => ( 
                       <button onClick={() => paginado(number)} 
                       key={number}>
                          {number}
                       </button >
                   ))} 
            </ul>
        </nav>
    )
}