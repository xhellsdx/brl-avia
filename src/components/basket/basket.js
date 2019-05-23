import React from 'react';
import './basket.css';
import { buyButtonClick, ticketInBasketClick } from '../../actions/';
import { connect } from 'react-redux';
import { beatyPrice } from '../../services/functions';

const Basket = ({ticketsInBasket, ticketsInBasketCount, buyButtonClick, ticketInBasketClick}) => {
  if (ticketsInBasketCount === 0) {
    return (
      <div className='empty-basket'>
        Корзина пуста
      </div>
    );
  }
  const tickets = [];
  for(let i in ticketsInBasket){
    const {id, from, to, price} = ticketsInBasket[i];
    tickets.push(
      <div className='ticket-in-basket' key={id} data-id={id} onClick={ticketInBasketClick}>
        <div className='cities'>
           <span className='cities-from'>{from}</span> <span className='cities-to'>{to}</span> <br/>
         </div>
         <div className='summ'>
         	<span className='ticket-important-info'>2</span> билета на сумму <span className='ticket-important-info'>{beatyPrice(price * 2)}</span>
         </div>
       </div>
    );
  }
  return(
    <div className='basket'>
      <div className='tickets-in-basket'>
        {tickets}
      </div>
      <button type='button' className='btn btn-primary basket-buy-button'onClick={buyButtonClick}>Купить</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ticketsInBasket: state.ticketsInBasket, 
    ticketsInBasketCount: state.ticketsInBasketCount, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyButtonClick: () => dispatch(buyButtonClick()),
    ticketInBasketClick: (e) => dispatch(ticketInBasketClick(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);