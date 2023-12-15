import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Fag from './pages/Fag'
import About from './pages/About'
import Services from './pages/Services'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/fag' element={<Fag />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
