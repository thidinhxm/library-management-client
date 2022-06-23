import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './globals.scss';
import { userInputs } from './formSource';


import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />}/>
            <Route path='readers'>
              <Route index element={<List />} />
              <Route path='new' element={<New inputs={userInputs} title="Add New User"/>} />
              <Route path=':id' element={<Single />} />
            </Route>
            <Route path='books' element={<List />}/>
            <Route path='borrowCards' element={<List />}/>
            <Route path='returnCards' element={<List />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
