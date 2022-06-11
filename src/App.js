import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecentActivity from './components/activities/recentActivity/recentActivity';
import RecentActivityList from './components/activities/recentActivityList';
import PopularCard from './components/card/popularCard/popularCard';
import StatisticCard from './components/card/statisticCard/statisticCard';
import './globals.scss';

import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
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
