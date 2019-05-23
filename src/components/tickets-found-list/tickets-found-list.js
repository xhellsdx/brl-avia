import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import Ticket from '../ticket/';
import Spinner from '../spinner/';
import './tickets-found-list.css'

const TicketsFoundList = ({findTickets, loading, ticketClick, ticketsInBasket, error}) => {
  if (loading) {
    return (
      <Spinner/>
    );
  }
  if(!findTickets || error) return (
    <div className='not-found-tickets'>
      Возникла ошибка при поиске билетов
    </div>
  );
  if(Object.keys(findTickets).length === 0) return (
    <div className='not-found-tickets'>
      Не найдено билетов
    </div>
  );
  const tickets = [];
  for(let i in findTickets){
    const {id, price, to, from} = findTickets[i];
    let ticketClassName = 'ticket';
    ticketClassName += (id in ticketsInBasket) ? ' in-basket' : '';
    tickets.push(
      <div key={id} className={ticketClassName} data-id={id} data-price={price} data-to={to} data-from={from} onClick={ticketClick}>
        <Ticket {...findTickets[i]} />
      </div>
    );
  }

  return(
    <div className='tickets'>
      {tickets}
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    findTickets: state.findTickets,
    loading: state.loading,
    ticketsInBasket: state.ticketsInBasket,
    error: state.error,
    ticketsInBasketCount: state.ticketsInBasketCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ticketClick: (e) => dispatch(actions.ticketClick(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsFoundList);