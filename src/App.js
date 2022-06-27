import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';

import './globals.scss';
import { userInputs } from './formSource';
import { setUser } from './redux/features/authSlide';
import PrivateRoute from './components/privateRoute/PrivateRoute';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path='/login' element={<PrivateRoute><Login /></PrivateRoute>} />
            <Route path='books' element={<PrivateRoute><List type='book' /></PrivateRoute>}/>
            <Route path='librarians'>
              <Route index element={<PrivateRoute><List type='librarian' /></PrivateRoute>} />
              <Route path='new' element={<PrivateRoute><New inputs={userInputs} title="Add New Librarian"/></PrivateRoute>} />
              <Route path=':id' element={<PrivateRoute><Single /></PrivateRoute>} />
            </Route>
            <Route path='readers'>
              <Route index element={<List type='reader' />} />
              <Route path='new' element={<New inputs={userInputs} title="Add New Reader"/>} />
              <Route path=':id' element={<Single />} />
            </Route>
            <Route path='borrowCards' element={<List type='borrowCard' />}/>
            <Route path='returnCards' element={<List type='returnCard' />}/>
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
