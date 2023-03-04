import './App.css'
import { Route, Routes } from 'react-router-dom'
import Trending from './Pages/Trending/Trending'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Container } from '@mui/material';
import Movies from './Pages/Movies/Movies'
import TVs from './Pages/TV Series/TVs'
import Search from './Pages/Search/Search'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Container>
        <Routes>
        <Route path='/search' element={<Search />}></Route>  
        <Route path='/series' element={<TVs />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/' element={<Trending />}></Route>
        </Routes>

      </Container>
      <Footer/>
    </div>
  )
}

export default App
