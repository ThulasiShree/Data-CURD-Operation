import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
      <h2>Curd Operations</h2>
      <h3>Type in url "/create"</h3><br/>
      <BrowserRouter>
        <Routes>
          <Route path='/create' element={<Create/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
