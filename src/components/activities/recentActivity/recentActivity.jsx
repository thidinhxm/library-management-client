import React from 'react';
import styles from './recentActivity.module.scss';
RecentActivity.propTypes = {

};

function RecentActivity(props) {
  return (
    <div className={styles.container}>
      <div className={styles.date}> Monday 23, May 2022</div>
      <table className={styles.table}>
        <tr>
          <td>Jane Moses</td>
          <td>St. Antdony’s</td>
          <td> 10:00</td>
          <td> 450 Tshs.</td>
        </tr>
      </table>
    </div>
  );
}

export default RecentActivity;