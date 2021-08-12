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


// RENDERIZADO QUE DEVERIA IR EN HOME PERO NO LO TOMA 



// const allVideogame = useSelector ((state) => state.videogame)
// {
//     allVideogame?.map((c) => {
//       return (
//      <Fragment>
//          <Link to={"/videogames" + c.id}>
//               <Card name={c.name} genre={c.genre} image={c.image} key={c.id} />
//             </Link>
//     </Fragment>
//    );
//     })}
