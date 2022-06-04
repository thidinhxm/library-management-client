import React from 'react';
import PropTypes from 'prop-types';
import styles from "./recentActivityList.module.scss";
import RecentActivity from './recentActivity/recentActivity';
RecentActivityList.propTypes = {

};

function RecentActivityList(props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <div className={styles.title}>Recent Activities</div>
        <div>
          <button className={styles.btnViewAll}> View All </button>
        </div>
      </div>
      <div>
        <RecentActivity />
      </div>
    </div>
  );
}

export default RecentActivityList;