import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TicketsFoundList from '../TicketsFoundList';
import Basket from '../Basket';

import s from './ContentBlock.module.scss';

@connect(
  state => ({
    cityToId: state.filter.cityToId,
    cityFromId: state.filter.cityFromId,
  }), null,
)
class ContentBlock extends React.PureComponent {
  static propTypes = {
    cityToId: PropTypes.string,
    cityFromId: PropTypes.string,
  };

  static defaultProps = {
    cityFromId: null,
    cityToId: null,
  };

  render() {
    const { cityToId, cityFromId } = this.props;

    if (cityToId === null || cityFromId === null) {
      return (
        <main className={s.wrapper}>
          <div className={s.emptyContentBlock}>
            Начните поиск билетов
          </div>
        </main>
      );
    }

    return (
      <main className={s.wrapper}>
        <TicketsFoundList />
        <Basket />
      </main>
    );
  }
}

export default ContentBlock;
