import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './globals.scss';

import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
