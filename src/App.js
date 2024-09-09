import './App.css';
import { useEffect } from "react"
import api from "./api"

import Header from './Components/Header';

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from "./pages/MovieDetail"


function App() {

  // 임시 코드 시작
  // useEffect(() => {
  //   api.get("/movie/top_rated?language=en-US&page=1")
  //     .then(res => console.log(res))
  // }, [])
  // 임시 코드 끝

  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/movies/:num' element={<MovieDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
