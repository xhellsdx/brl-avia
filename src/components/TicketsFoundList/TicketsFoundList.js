import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../redux/actions';
import Ticket from '../Ticket';
import Spinner from '../Spinner';

import './tickets-found-list.css';

@connect(
  state => ({
    findTickets: state.findTickets,
    loading: state.loading,
    ticketsInBasket: state.ticketsInBasket,
    error: state.error,
    ticketsInBasketCount: state.ticketsInBasketCount,
  }),
  {
    ticketClick: actions.ticketClick,
  },
)
class TicketsFoundList extends React.PureComponent {
  static propTypes = {
    findTickets: PropTypes.shape({}),
    loading: PropTypes.bool,
    ticketClick: PropTypes.func,
    ticketsInBasket: PropTypes.shape({}),
    error: PropTypes.bool,
  };

  static defaultProps = {
    findTickets: {},
    loading: false,
    ticketClick: () => {},
    ticketsInBasket: {},
    error: false,
  };

  ticketClickHandler = (...ticketData) => () => {
    const { ticketClick } = this.props;
    ticketClick(...ticketData);
  }

  render() {
    const {
      findTickets,
      loading,
      ticketsInBasket,
      error,
    } = this.props;

    if (loading) {
      return (
        <Spinner />
      );
    }

    if (!findTickets || error) {
      return (
        <div className="not-found-tickets">
          Возникла ошибка при поиске билетов
        </div>
      );
    }
    if (Object.keys(findTickets).length === 0) {
      return (
        <div className="not-found-tickets">
          Не найдено билетов
        </div>
      );
    }

    const tickets = [];
    Object.keys(findTickets).forEach((i) => {
      const {
        id,
      } = findTickets[i];
      let ticketClassName = 'ticket';
      ticketClassName += (id in ticketsInBasket) ? ' in-basket' : '';
      tickets.push(
        <div
          key={id}
          className={ticketClassName}
          onClick={this.ticketClickHandler(findTickets[i])}
        >
          <Ticket {...findTickets[i]} />
        </div>,
      );
    });

    return (
      <div className="tickets">
        {tickets}
      </div>
    );
  }
}

export default TicketsFoundList;
