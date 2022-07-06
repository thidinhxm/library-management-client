import navbarStyle from './navbar.module.scss'
import { Search, Notifications } from '@mui/icons-material';
import Avatar from '../../assets/img/avatar.jpg';
import AccountMenu from './AccountMenu';
function Navbar() {
  return (
    <div className={navbarStyle.navbar}>
      <div className={navbarStyle.searchGroup}>
          <input type="text" className={navbarStyle.searchInput} placeholder="Search" />
          <button className={navbarStyle.searchBtn}><Search /></button>
      </div>

      <div className={navbarStyle.userInfo}>
          <div className={navbarStyle.notification}><Notifications /></div>
          <AccountMenu>
            <img src={Avatar} alt="avt" className={navbarStyle.userImg} />
          </AccountMenu>
          
      </div>
    </div>
  )
}

export default Navbar