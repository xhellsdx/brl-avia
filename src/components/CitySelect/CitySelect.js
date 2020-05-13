import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';

import s from './CitySelect.module.scss';

const CITIES_DATA = [
  { id: '1', name: 'Москва' },
  { id: '2', name: 'Санкт-Петербург' },
  { id: '3', name: 'Париж' },
  { id: '4', name: 'Лондон' },
  { id: '5', name: 'Вашингтон' },
  { id: '6', name: 'Оттава' },
];

@connect(
  null,
  {
    cityToFormSelected: actions.cityToFormSelected,
    cityFromFormSelected: actions.cityFromFormSelected,
  },
)
class CitySelect extends React.PureComponent {
  static propTypes = {
    cityToFormSelected: PropTypes.func,
    cityFromFormSelected: PropTypes.func,
  };

  static defaultProps = {
    cityFromFormSelected: () => {},
    cityToFormSelected: () => {},
  };

  render() {
    const { cityToFormSelected, cityFromFormSelected } = this.props;

    return (
      <div className={s.citySelect}>
        <span className={s.citySelectFrom}>
          <div className={s.text}>Откуда</div>
          <select className={s.customSelect} onChange={cityFromFormSelected} defaultValue="DEFAULT">
            <option value="DEFAULT" disabled>Выберете город</option>
            {CITIES_DATA.map(({ id, name }) => (<option key={id} value={id}>{name}</option>))}
          </select>
        </span>
        <span className={s.citySelectTo}>
          <div className={s.text}>Куда</div>
          <select className={s.customSelect} onChange={cityToFormSelected} defaultValue="DEFAULT">
            <option value="DEFAULT" disabled>Выберете город</option>
            {CITIES_DATA.map(({ id, name }) => (<option key={id} value={id}>{name}</option>))}
          </select>
        </span>
      </div>
    );
  }
}

export default CitySelect;
