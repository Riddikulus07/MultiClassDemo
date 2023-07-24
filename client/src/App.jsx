import { BrowserRouter as Router, Routes, Route}from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Dash from './screens/Dash/Dash';
import config from './config.json'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          {config.entities.map((e)=>{
            return <Route path={`/${e.name}`} element={
            <Dash 
              resource = {e}
            />
          } key = {`/${e.name}`}/>
          })}          
        </Routes>
      </Router>
    </div>
  )
}

export default App;
