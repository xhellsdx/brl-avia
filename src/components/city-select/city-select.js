import React from 'react';
import './city-select.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/';

const CitySelect = ({cityToFormSelected, cityFromFormSelected}) => {
  return(
    <div className='city-select'>
      <span className='city-select-from'>
        <div className='city-select-text'>Откуда</div>
        <select className='custom-select custom-select-lg mb-3 city-from' onChange={cityFromFormSelected} defaultValue={'DEFAULT'}>
          <option value='DEFAULT' disabled >Выберете город</option>
          <option value='1'>Москва</option>
          <option value='2'>Санкт-Петербург</option>
          <option value='3'>Париж</option>
          <option value='4'>Лондон</option>
          <option value='5'>Вашингтон</option>
          <option value='6'>Оттава</option>
        </select>
      </span>
      <span className='city-select-to'>
        <div className='city-select-text'>Куда</div>
        <select className='custom-select custom-select-lg mb-3 city-to' onChange={cityToFormSelected} defaultValue={'DEFAULT'}>
          <option value='DEFAULT' disabled >Выберете город</option>
          <option value='1'>Москва</option>
          <option value='2'>Санкт-Петербург</option>
          <option value='3'>Париж</option>
          <option value='4'>Лондон</option>
          <option value='5'>Вашингтон</option>
          <option value='6'>Оттава</option>
        </select>
      </span>
    </div>
  );
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    cityToFormSelected: (e) => dispatch(actions.cityToFormSelected(e)),
    cityFromFormSelected: (e) => dispatch(actions.cityFromFormSelected(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySelect);