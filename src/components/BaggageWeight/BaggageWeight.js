import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';

import s from './BaggageWeight.module.scss';

@connect(
  state => ({
    weight: state.filter.weight,
  }),
  {
    baggageWeightInc: actions.baggageWeightInc,
    baggageWeightDec: actions.baggageWeightDec,
  },
)
class BaggageWeight extends React.PureComponent {
  static propTypes = {
    baggageWeightInc: PropTypes.func,
    baggageWeightDec: PropTypes.func,
    weight: PropTypes.number,
  };

  static defaultProps = {
    baggageWeightInc: () => {},
    baggageWeightDec: () => {},
    weight: 0,
  };
  render = () => {
    const { baggageWeightInc, weight, baggageWeightDec } = this.props;

    return (
      <div className={s.baggageWeight}>
        <span className={s.baggageWeightText}>
          Багаж (кг)
        </span>
        <span className={s.weightSelection}>
          <i className={s.fa} onClick={baggageWeightInc} />
          <span className={s.baggageWeightKilo}>{weight}</span>
          <i className={s.fa} onClick={baggageWeightDec} />
        </span>
      </div>
    );
  }
}

export default BaggageWeight;
