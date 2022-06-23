import classes from './Single.module.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
// import Table from '../../components/table/Table'

const Single = () => {
  return (
    <div className={classes.single}>
      <Sidebar />
      <div className={classes.singleContainer}>
        <Navbar />
        <div className={classes.top}>
          <div className={classes.left}>
            <div className={classes.editButton}>Edit</div>
            <h1 className={classes.title}>Information</h1>
            <div className={classes.item}>
              <img 
                src="https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2022/03/13/hoi-gai-xinh-goi-cam-noi-gi-truoc-ap-luc-mac-sexy-la-hu-hongdocx-1647188022424.jpeg" 
                alt=""
                className={classes.itemImg} 
              />
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
          <div className={classes.right}>
            <Chart aspect={3 / 1} title="User Spending (Last 12 Months)"/>
          </div>
        </div>
        <div className={classes.bottom}>
          <h1 className={classes.title}>Last Transctions</h1>
          {/* <Table /> */}
        </div>
      </div>
      
    </div>
  )
}

export default Single