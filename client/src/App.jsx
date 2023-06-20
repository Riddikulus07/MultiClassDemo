import { useState } from 'react'
import { BrowserRouter as Router}from 'react-router-dom'
import Create from './create';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/create" element={<Create/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
