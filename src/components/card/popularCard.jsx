import React from 'react';
import PropTypes from 'prop-types';
import popularCardStyle from './popularCard.module.scss';
PopularCard.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  position: PropTypes.string,
  img_url: PropTypes.string,
};


function PopularCard(props) {
  return (
    <div>
      <div className={popularCardStyle.wrapper}>
        <div className={popularCardStyle.card}>
          <div className={popularCardStyle.img}></div>
          <img className={popularCardStyle.imgProfile} src='https://images.unsplash.com/photo-1444011283387-7b0f76371f12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt ="profile"/>
            <h1 className={popularCardStyle.name}>St. Joseph Cathedral</h1>
            <p className={popularCardStyle.amount}>56</p>
            <button className={popularCardStyle.position}>1st</button>
        </div>
      </div>
    </div>
  );
}

export default PopularCard;