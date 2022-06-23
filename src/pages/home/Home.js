import homeStyle from './home.module.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import StatisticCard from '../../components/card/statisticCard/statisticCard';
import RecentActivityList from '../../components/activities/recentActivityList/recentActivityList';
// import PopularCard from '../../components/card/popularCard/popularCard'
const Home = () => {
  return (
    <div className={homeStyle.home}>
      <Sidebar />
      <div className={homeStyle.main}>
        <Navbar />

        <div className={homeStyle.staticsticCards}>
          <StatisticCard type='student'/>
          <StatisticCard type='bookTitle'/>
          <StatisticCard type='availableBook'/>
          <StatisticCard type='occupiedBook'/>
        </div>

        <div className={homeStyle.activity}>
          <RecentActivityList />
        </div>
      </div>

      {/* <PopularCard /> */}
    </div>
  )
}

export default Home