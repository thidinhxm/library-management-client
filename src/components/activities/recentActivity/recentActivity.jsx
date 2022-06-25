import styles from './recentActivity.module.scss';

function RecentActivity(props) {
  return (
    <div className={styles.container}>
      <div className={styles.date}> Monday 23, May 2022</div>
      <table className={styles.table}>
        <tbody>
        <tr>
          <td>Jane Moses</td>
          <td>St. Antdony’s</td>
          <td> 10:00</td>
          <td> 450 Tshs.</td>
        </tr>
        <tr>
          <td>Jane Moses</td>
          <td>St. Antdony’s</td>
          <td> 10:00</td>
          <td> 450 Tshs.</td>
        </tr>
        <tr>
          <td>Jane Moses</td>
          <td>St. Antdony’s</td>
          <td> 10:00</td>
          <td> 450 Tshs.</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecentActivity;