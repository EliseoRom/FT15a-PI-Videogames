import React from 'react';

export default function Card({ name, genre, image}) {
    return (
        <div>
            <h3>{name}</h3>
            <h5>{genre}</h5>
            <img src={image} alt="img not found" width="200px" height="50px"/>
        </div>
    )
};