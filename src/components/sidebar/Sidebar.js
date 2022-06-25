import sidebarStyle from './sidebar.module.scss'
import { NavLink } from 'react-router-dom'

function Sidebar() {

  return (
    <div className={sidebarStyle.sidebar}>
      <div className={sidebarStyle.sizebarList}>    
        <NavLink 
          to="/"
          className={({isActive}) => isActive ? sidebarStyle.active : undefined}
        > 
          <span className={sidebarStyle.item}>Dashboard</span> 
        </NavLink>
        <NavLink 
          to="/books"
          className={({isActive}) => isActive ? sidebarStyle.active : undefined}
        > 
          <span className={sidebarStyle.item}>Books</span> 
        </NavLink>
        <NavLink 
          to="/readers"
          className={({isActive}) => isActive ? sidebarStyle.active : undefined}
        > 
          <span className={sidebarStyle.item}>Readers</span> 
        </NavLink>
        <NavLink 
          to="/librarians"
          className={({isActive}) => isActive ? sidebarStyle.active : undefined}
        > 
          <span className={sidebarStyle.item}>Librarians</span> 
        </NavLink>
        <NavLink 
          to="/borrowCards"
          className={({isActive}) => isActive ? sidebarStyle.active : undefined}
        > 
          <span className={sidebarStyle.item}>Borrow Cards</span> 
        </NavLink>
        <NavLink 
          to="/returnCards"
          className={({isActive}) => isActive ? sidebarStyle.active : undefined}
        > 
          <span className={sidebarStyle.item}>Return Cards</span> 
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar