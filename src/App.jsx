import React from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import WatchNow from './pages/WatchNow'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/watchnow' element={<WatchNow/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </div>
  )
}

export default App
