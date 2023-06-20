import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Create from './create';

function App() {
  // const [count, setCount] = useSate(0)

  return (

    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/create" element={<Create/>} />
        
      </Routes>
      </BrowserRouter>
      </div>
  );   
  }
export default App;
