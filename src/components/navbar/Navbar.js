import navbarStyle from './navbar.module.scss'
import { Search, Notifications } from '@mui/icons-material';
import Avatar from '../../assets/img/dota2.jpg'
function Navbar() {
  return (
    <div className={navbarStyle.navbar}>
      <div className={navbarStyle.searchGroup}>
          <input type="text" className={navbarStyle.searchInput} placeholder="Search" />
          <button className={navbarStyle.searchBtn}><Search /></button>
      </div>

      <div className={navbarStyle.userInfo}>
          <div className={navbarStyle.notification}><Notifications /></div>
          <p className={navbarStyle.welcomeUser}>
            <span className={navbarStyle.mainColor}>Hello,</span> <span className={navbarStyle.username}>Thi</span>
          </p>
          <img src={Avatar} alt="avt" className={navbarStyle.userImg} />
      </div>
    </div>
  )
}

export default Navbar