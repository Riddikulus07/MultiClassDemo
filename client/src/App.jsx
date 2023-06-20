import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom'
import Create from './create';
import Retrieve from './screens/Retrieve/Retrieve'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/create" element={<Create/>} />
          <Route path='/' element={<Retrieve/>}/>
          <Route path='/retrieve' element={<Retrieve/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
