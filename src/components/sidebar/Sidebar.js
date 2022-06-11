import sidebarStyle from './sidebar.module.scss'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

function Sidebar() {
  return (
    <div className={sidebarStyle.sidebar}>
      <div className={sidebarStyle.sizebarList}>    
        <Link to="/"> <span className={clsx(sidebarStyle.item, sidebarStyle.active)}>Dashboard</span> </Link>
        <Link to="/"> <span className={sidebarStyle.item}>Students</span> </Link>
        <Link to="/"> <span className={sidebarStyle.item}>Book</span> </Link>
        <Link to="/"> <span className={sidebarStyle.item}>Borrow Card</span> </Link>
        <Link to="/"> <span className={sidebarStyle.item}>Return Card</span> </Link>
        <Link to="/"> <span className={sidebarStyle.item}>Schools</span> </Link>
        <Link to="/"> <span className={sidebarStyle.item}>Bursars</span> </Link>
      </div>
    </div>
  )
}

export default Sidebar