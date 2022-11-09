import React from 'react';
import MovieCard from '../moviecard/MovieCard';
import '../list movie/MovieList.css'

const  MovieList = ({list}) => {

    const MovieList = list.map((elm) => <MovieCard elm={elm} />)
    return(
        <div className='movie-container'>
            {MovieList}
        </div>
    )
}




    //console.log(MovieData);
    //const MovieList = MovieData.map((elm)=> <MovieCard elm={elm}/>);


    //return(
        //<div className='movie-container'>
       //     {MovieList}
        //</div>
    //)
//}
export default  MovieList

