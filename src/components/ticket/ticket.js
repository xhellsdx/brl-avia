import React from 'react';
import PropTypes from 'prop-types';

import { getTime, getDate, beatyPrice } from '../../utils/helpers';

import s from './Ticket.module.scss';

const Ticket = ({
  from,
  to,
  price,
  duration,
  time_arrival,
  time_departure,
}) => (
  <>
    <div className={s.fromInfo}>
      <span className={s.fromInfoTime}>{getTime(time_departure)}</span>
      <span className={s.fromInfoDate}>
        {from}
        <br />
        {getDate(time_departure)}

      </span>
    </div>
    <div className={s.ticketInfoPrice}>
      <span className={s.duration}>{duration}ч</span>
      <span className={s.price}>{beatyPrice(price)} р</span>
    </div>
    <div className={s.toInfo}>
      <span className={s.toInfoTime}>{getTime(time_arrival)}</span>
      <span className={s.toInfoDate}>
        {to}
        <br />
        {getDate(time_arrival)}
      </span>
    </div>
  </>
);

Ticket.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
  price: PropTypes.number,
  duration: PropTypes.number,
  time_arrival: PropTypes.string,
  time_departure: PropTypes.string,
};

Ticket.defaultProps = {
  from: '',
  to: '',
  price: 0,
  duration: 0,
  time_arrival: '',
  time_departure: '',
};

export default Ticket;
