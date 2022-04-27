import './App.css';

import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='hiretonnies'>
        <Routes basename = '/' >
          <Route path='/' element={<Homepage/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
