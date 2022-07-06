import classes from './profile.module.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <Sidebar />
      <div className={classes.profileContainer}>
        <Navbar />
        <div className={classes.top}>
          <div className={classes.left}>
            <div className={classes.editButton}>Edit</div>
            <h1 className={classes.title}>Information</h1>
            <div className={classes.item}>
              <div className={classes.details}>
                <h1 className={classes.itemTitle}>Misthy</h1>
                <div className={classes.detailItem}>
                  <span className={classes.itemKey}>Email: </span>
                  <span className={classes.itemValue}>misthy@gmail.com</span>
                </div>
                <div className={classes.detailItem}>
                  <span className={classes.itemKey}>Phone: </span>
                  <span className={classes.itemValue}>0123456789</span>
                </div>
                <div className={classes.detailItem}>
                  <span className={classes.itemKey}>Address: </span>
                  <span className={classes.itemValue}>HCM City</span>
                </div>
                <div className={classes.detailItem}>
                  <span className={classes.itemKey}>Country: </span>
                  <span className={classes.itemValue}>Vietnam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile