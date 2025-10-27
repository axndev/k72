import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import Home from './assets/pages/Home'
import Projects from './assets/pages/Projects'
import Agence from './assets/pages/Agence'
import Header from './assets/components/Navigation/Header'
function App() {
  return (
    <div>
      <Header />     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agence' element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App