import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {NetflixShows} from './components/netflix/NetflixShows'
import {NetflixError} from './components/netflix/NetflixError'
import {NetflixMovies} from './components/netflix/NetflixMovies'
import {NetflixHome} from './components/netflix/NetflixHome'
import { Header } from './components/Header';
import { CreateUser } from './components/CreateUser';
import {Count} from './components/Count'
import { ApiDemo1 } from './components/api/ApiDemo1';
import {ApiDemo2} from './components/api/ApiDemo2'
import {ApiDemo4} from './components/api/ApiDemo4'
import { SearchMovies } from './components/api/ombd/SearchMovies';
import { MovieDetail } from './components/api/ombd/MovieDetail';
import { ApiDemo5 } from './components/api/ApiDemo5';
import { Recorder } from './components/Recorder';
function App() {
 
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>

        {/* <Route path="/netflixMovies" element = {<NetflixMovies/>}></Route>
        <Route path="/netflixShows" element ={<NetflixShows/>}></Route>
        <Route path ="/" element ={<NetflixHome/>}></Route>
        <Route path ="/createuser" element ={<CreateUser/>}></Route>
        <Route path ="/count" element ={<Count/>}></Route>
        <Route path="/ApiDemo1" element={<ApiDemo1/>}></Route>
        <Route path="/ApiDemo2" element={<ApiDemo2/>}></Route>
        <Route path="/searchmovie" element={<SearchMovies/>}></Route>
        <Route path="/moviedetail/:id" element={<MovieDetail/>}></Route>
        <Route path="/ApiDemo4" element={<ApiDemo4/>}></Route> 
        <Route path="/ApiDemo5/" element={<ApiDemo5/>}></Route> */}
        <Route path="/Recorder" element={<Recorder/>}></Route>
        {/* <Route path ="/*" element ={<h1>404</h1>}></Route> */}
        <Route path ="/*" element ={<NetflixError/>}></Route>
      </Routes>
      {/* <Header></Header> */}
    </div>
  );
}

export default App;
