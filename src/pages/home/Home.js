import homeStyle from './home.module.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
const Home = () => {
  return (
    <div className={homeStyle.home}>
      <Sidebar />
      <div className={homeStyle.main}>
        <Navbar />
      </div>
    </div>
  )
}

export default Home