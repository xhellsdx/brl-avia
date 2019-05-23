import React from 'react';
import * as actions from '../../actions/';
import { connect } from 'react-redux';

import './search-form.css';
import CitySelect from '../city-select';
import BaggageWeight from '../baggage-weight';
import TicketsAPI from '../../services/tickets-api';



const SearchForm = ({cityToId, cityFromId, weight, loadingStart, loadingEnd, onFindTicketsError}) => {
  if(
    cityToId > 0
    && cityFromId > 0
    && weight > 0
  ) {
    loadingStart();
    const ticketsAPI = new TicketsAPI();
    ticketsAPI.delay(1000)
      .then(() => {
        return ticketsAPI.findTickets({
        cityToId: cityToId,
        cityFromId: cityFromId,
        weight: weight
      });}, onFindTicketsError)
      .then((result) => {
        loadingEnd(result);
      })
  }
  return (
      <header className='search-form'>
        <CitySelect/>
        <BaggageWeight/>
      </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cityToId: state.filter.cityToId,
    cityFromId: state.filter.cityFromId,
    weight: state.filter.weight
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadingEnd: (t) => dispatch(actions.loadingEnd(t)),
    loadingStart: () => dispatch(actions.loadingStart()),
    onFindTicketsError: () => dispatch(actions.onFindTicketsError()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);