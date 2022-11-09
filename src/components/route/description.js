import React from 'react'
import { useParams } from "react-router";

function Description({elm}) {

    const params = useParams();
  
    const movie = elm.filter((el) => el.title == params.title)[0];

  return (

    <div style={{padding:'50px',display:'flex',justifyContent:'space-around'}}> 
        <div>
        <img style={{width:'286px',height:'400px'}} src={movie.posterURL}/>
        </div>
        <div>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <iframe style={{width:'560px',height:'316px'}} src={movie.trailer}></iframe>
        </div>

 </div>
  )
}

export default Description