import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{ useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieAdd from './components/add movie/AddMovie';
import Navsearch from './components/filter movie/Navsearch';
import MovieList from './components/list movie/MovieList';
import About from './components/route/about';
import Contact from './components/route/contact';
import Description from './components/route/description';


function App() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  
  const [moviesList,setmoviesList]  = useState([
    {
        title :"Top Gun: Maverick",
        description :"After thirty years, Maverick is still pushing the envelope as a top naval aviator",
        posterURL :'https://fr.web.img3.acsta.net/pictures/22/03/29/15/12/0827894.jpg',
        rating : 5,
        trailer :'https://www.youtube.com/embed/V4gQdk1nAn0'
      },
      {
        title :'Jurassic World Dominion' ,
        description :'Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood',
        posterURL :'https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
        rating : 3,
        trailer :'https://www.youtube.com/embed/4R87S4YCtI8'
      },
      {
        title :'Minions: The Rise of Gru',
        description :'The untold story of one twelve-year-olds dream to become the worlds greatest supervillain.',
        posterURL :'https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_FMjpg_UX1000_.jpg',
        rating : 4,
        trailer :'https://www.youtube.com/embed/6DxjJzmYsXo'
      },
      {
        title :'The Batman',
        description :'When a sadistic serial killer begins murdering key political figures in Gotham',
        posterURL :'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg',
        rating : 4,
        trailer :'https://www.youtube.com/embed/hWRSJlp50rQ'
      }
]);
  const handleNew = (val) => {
    setmoviesList([...moviesList,val]);
  };

  return (
    <div className="App">
      <Navsearch setText={setText} setRating={setRating}/>
      
      <Routes>
      <Route path='/' element={
      <div>
      <MovieAdd handleNew={handleNew}/>
      <MovieList list={moviesList.filter(elm =>elm.title.toLowerCase().includes(text.toLocaleLowerCase())
        && elm.rating>=rating)}/>
      </div>}
      />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/description/:title' element={<Description elm={moviesList}/>}/>
      
      </Routes>

    </div>
  );
}

export default App;
