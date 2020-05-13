import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';
import CitySelect from '../CitySelect';
import BaggageWeight from '../BaggageWeight';

import s from './SearchForm.module.scss';

@connect(
  state => ({
    cityToId: state.filter.cityToId,
    cityFromId: state.filter.cityFromId,
    weight: state.filter.weight,
  }),
  {
    fetchTickets: actions.fetchTickets,
  },
)
class SearchForm extends React.PureComponent {
  static propTypes = {
    cityToId: PropTypes.string,
    cityFromId: PropTypes.string,
    weight: PropTypes.number,
    fetchTickets: PropTypes.func,
  };

  static defaultProps = {
    cityToId: null,
    cityFromId: null,
    weight: 0,
    fetchTickets: () => {},
  };

  componentDidUpdate() {
    const {
      cityToId, cityFromId, weight, fetchTickets,
    } = this.props;

    if (cityToId && cityFromId && weight) {
      fetchTickets(cityToId, cityFromId, weight);
    }
  }

  render() {
    return (
      <header className={s.searchForm}>
        <CitySelect />
        <BaggageWeight />
      </header>
    );
  }
}

export default SearchForm;
