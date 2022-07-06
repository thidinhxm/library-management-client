import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';

import './globals.scss';
import { librarianInputs, readerInputs, borrowCardInputs, returnCardInputs, bookInputs } from './formSource';
import { setUser } from './redux/features/authSlice';
import PrivateRoute from './components/privateRoute/PrivateRoute';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import Profile from './pages/profile/Profile';

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
            <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
            
            <Route path='books'>
              <Route index element={<PrivateRoute><List type='book' /></PrivateRoute>}/>
              <Route path=':id' element={<PrivateRoute><Single /></PrivateRoute>} />
              <Route path='new' element={<PrivateRoute><New inputs={bookInputs} title='Add New Book' /></PrivateRoute>}/>
            </Route> 
            
            <Route path='librarians'>
              <Route index element={<PrivateRoute><List type='librarian' /></PrivateRoute>} />
              <Route path='new' element={<PrivateRoute><New inputs={librarianInputs} title="Add New Librarian"/></PrivateRoute>} />
              <Route path=':id' element={<PrivateRoute><Single /></PrivateRoute>} />
            </Route>
            <Route path='readers'>
              <Route index element={<PrivateRoute><List type='reader' /></PrivateRoute>} />
              <Route path='new' element={<New inputs={readerInputs} title="Add New Reader"/>} />
              <Route path=':id' element={<Single />} />
            </Route>
            <Route path='borrowCards'>
              <Route index element={<PrivateRoute><List type='borrowCard' /></PrivateRoute>} />
              <Route path='new' element={<PrivateRoute><New inputs={borrowCardInputs} title="Add New Borrow Card"/></PrivateRoute>} />
            </Route>
            <Route path='returnCards'>
              <Route index element={<PrivateRoute><List type='returnCard' /></PrivateRoute>} />
              <Route path='new' element={<PrivateRoute><New inputs={returnCardInputs} title="Add New Return Card"/></PrivateRoute>} />
            </Route>
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
