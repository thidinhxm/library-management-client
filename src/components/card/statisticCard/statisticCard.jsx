import React from 'react';
import PropTypes from 'prop-types';
import style from './statisticCard.module.scss';
import studentIcon from '../../../assets/img/student.svg';
StatisticCard.propTypes = {

};

function StatisticCard(props) {
  return (
    <div>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.cardIcon}>
            <img src={studentIcon} alt="student" />
          </div>
            <div className={style.cardInfo}>
              <div className={style.cardName}>Students</div>
              <div className={style.cardAmount}>60,546</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default StatisticCard;