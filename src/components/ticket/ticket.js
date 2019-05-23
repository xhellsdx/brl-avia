import React from 'react';
import './ticket.css';

import { getTime, getDate, beatyPrice } from '../../services/functions';

const Ticket = ({id, from, to, price, duration, time_arrival, time_departure}) => {
  return(
    <React.Fragment>
      <div className='from-info'>
        <span className='from-info-time'>{getTime(time_departure)}</span>
        <span className='from-info-date'>
            {from}
           <br/>
          {getDate(time_departure)}
          
        </span>
      </div>
      <div className='ticket-info-price'>
        <span className='duration'>{duration}ч</span>
        <span className='price'>{beatyPrice(price)} р</span>
      </div>
      <div className='to-info'>
        <span className='to-info-time'>{getTime(time_arrival)}</span>
        <span className='to-info-date'>
            {to}
          <p>
          {getDate(time_arrival)}
          </p>
        </span>
      </div>
    </React.Fragment>
  );
}

export default Ticket;