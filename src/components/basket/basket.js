import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../redux/actions';
import { beatyPrice } from '../../utils/helpers';

import s from './Basket.module.scss';

@connect(
  state => ({
    ticketsInBasket: state.ticketsInBasket,
    ticketsInBasketCount: state.ticketsInBasketCount,
  }),
  {
    buyButtonClick: actions.buyButtonClick,
    ticketInBasketClick: actions.ticketInBasketClick,
  },
)
class Basket extends React.PureComponent {
  static propTypes = {
    ticketsInBasket: PropTypes.shape({}),
    ticketsInBasketCount: PropTypes.number,
    buyButtonClick: PropTypes.func,
    ticketInBasketClick: PropTypes.func,
  };

  static defaultProps = {
    ticketsInBasket: {},
    ticketsInBasketCount: 0,
    buyButtonClick: () => {},
    ticketInBasketClick: () => {},
  };

  ticketInBasketHandler = id => () => {
    const { ticketInBasketClick } = this.props;
    ticketInBasketClick(id);
  }

  render() {
    const {
      ticketsInBasket, ticketsInBasketCount, buyButtonClick,
    } = this.props;

    if (ticketsInBasketCount === 0) {
      return (
        <div className={s.emptyBasket}>
          Корзина пуста
        </div>
      );
    }

    const tickets = [];
    Object.keys(ticketsInBasket).forEach((key) => {
      const {
        id, from, to, price,
      } = ticketsInBasket[key];
      tickets.push(
        <div className={s.ticketInBasket} key={id} onClick={this.ticketInBasketHandler(id)}>
          <div className={s.cities}>
            <span className={s.citiesFrom}>{from}</span> <span>{to}</span> <br />
          </div>
          <div className={s.summ}>
            <span className={s.ticketImportantInfo}>2 </span>
            билета на сумму
            <span className={s.ticketImportantInfo}> {beatyPrice(price * 2)}</span>
          </div>
        </div>,
      );
    });

    return (
      <div className={s.basket}>
        <div>
          {tickets}
        </div>
        <button type="button" className={s.basketBuyButton} onClick={buyButtonClick}>
          Купить
        </button>
      </div>
    );
  }
}

export default Basket;
