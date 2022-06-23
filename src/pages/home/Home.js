import homeStyle from './home.module.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import StatisticCard from '../../components/card/statisticCard/statisticCard';
import RecentActivityList from '../../components/activities/recentActivityList/recentActivityList';
// import PopularCard from '../../components/card/popularCard/popularCard'
import Chart from '../../components/chart/Chart';
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
        
        <div className={homeStyle.charts}>
          <RecentActivityList />
          <Chart aspect={2 / 1} title="Last 12 Months (Number of book borrowed)"/>
        </div>
      {/* <PopularCard /> */}
      </div>

    </div>
  )
}

export default Home