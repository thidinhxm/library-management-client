import clsx from 'clsx';
import style from './statisticCard.module.scss';

import studentIcon from '../../../assets/img/student.svg';
import bookTitleIcon from '../../../assets/img/book-title.svg';
import availableBookIcon from '../../../assets/img/available-book.svg';
import occupiedBookIcon from '../../../assets/img/occupied-book.svg';


function StatisticCard({ type }) {
  let data;
  switch (type) {
    case 'student': 
      data = {
        icon: studentIcon,
        title: 'Students',
        amount: '56',
        color: '#F4A261',
        type: style.student,
      };
      break;
    case 'bookTitle':
      data = {
        icon: bookTitleIcon,
        title: 'Book Titles',
        amount: '56',
        color: '#E9C46A',
        type: style.bookTitle,
      };
      break;
    case 'availableBook':
      data = {
        icon: availableBookIcon,
        title: 'Available Books',
        amount: '56',
        color: '#E76F51',
        type: style.availableBook,
      };
      break;
    case 'occupiedBook':
      data = {
        icon: occupiedBookIcon,
        title: 'Occupied Books',
        amount: '56',
        color: '#2A9D8F',
        type: style.occupiedBook,
      };
      break;
  
    default:
      break;
    }

  return (
    
    <div className={clsx(style.cardContainer, data.type)}>
      <div className={style.card}>
        <div className={style.cardIcon}>
          <img src={data.icon} alt={type} />
        </div>
        <div className={style.cardInfo}>
          <div className={style.cardName}>{data.title}</div>
          <div className={style.cardAmount}>{data.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default StatisticCard;