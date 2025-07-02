import React from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Actors from './pages/Actors'
import Contact from './pages/Contact'
import WatchNow from './pages/WatchNow'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/watchnow' element={<WatchNow/>}/>
        <Route path='/actors' element={<Actors/>}/>
      </Routes>
    </div>
  )
}

export default App
