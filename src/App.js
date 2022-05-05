import './App.css';

import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Bookingpage from './pages/Bookingpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/hiretonnies'>
        <Routes basename = '/' >
          <Route path='/' element={<Homepage/>}/>
          <Route path='/book' element={<Bookingpage/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
