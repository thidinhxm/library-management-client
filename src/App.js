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
            <Route path='books' element={<List type='book' />}/>
            <Route path='librarians'>
              <Route index element={<List type='librarian' />} />
              <Route path='new' element={<New inputs={userInputs} title="Add New Librarian"/>} />
              <Route path=':id' element={<Single />} />
            </Route>
            <Route path='readers'>
              <Route index element={<List type='reader' />} />
              <Route path='new' element={<New inputs={userInputs} title="Add New Reader"/>} />
              <Route path=':id' element={<Single />} />
            </Route>
            <Route path='borrowCards' element={<List type='borrowCard' />}/>
            <Route path='returnCards' element={<List type='returnCard' />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
