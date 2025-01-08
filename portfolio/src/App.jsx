// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Certifications } from './pages/Certifications'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { Layout } from './Layout'

import './App.css'

function App() {

  return (
    <Router>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/certifications" element={<Certifications/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>

    </Router>
  )
}

export default App
