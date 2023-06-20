// import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route}from 'react-router-dom'
import Create from './components/Create/create';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [count, setCount] = useSate(0)

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

export default App;
