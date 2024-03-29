import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Landing from './pages/Landing'
import WatchHistory from './pages/WatchHistory'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
  <div>
    <Header/>
    <Routes>

      <Route path ='/' element={<Landing/>}/>
      <Route path ='/home' element={<Home/>}/>
      <Route path ='/watchhistory' element={<WatchHistory/>}/>  

    </Routes>


    <Footer/>

  </div>
  )
}

export default App
