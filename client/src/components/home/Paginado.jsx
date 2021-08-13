
import React from 'react';

export default function Paginado ({charactersPerPage, allCharacters, paginado}){
    const pageNumbers = []

    for (let i=1; i<=Math.ceil(allCharacters/charactersPerPage); i++) {
        pageNumbers.push(i) // para que la pagina comience en  1 let i=1
    }
    return(
        <nav>
            <ul className='paginado'>
               {
                   pageNumbers && 
                   pageNumbers.map(number =>
                   ( 
                       <button onClick={() => paginado(number)} 
                        className='number'key={number}>
                          {number}
                       </button >

                   ))} 
            </ul>
        </nav>
    )
}