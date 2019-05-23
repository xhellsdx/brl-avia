import React from 'react';
import './baggage-weight.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/';

const BaggageWeight = ({weight, baggageWeightInc, baggageWeightDec}) => {
  return(
    <div className='baggage-weight'>
      <div className='baggage-weight-text'>
        Багаж (кг)
      </div>
        <i className='fa fa-plus-circle' onClick={baggageWeightInc}></i>
        <span className='baggage-weight-kilo'>{weight}</span>
        <i className='fa fa-minus-circle' onClick={baggageWeightDec}></i>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weight: state.filter.weight
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    baggageWeightInc: () => dispatch(actions.baggageWeightInc()),
    baggageWeightDec: () => dispatch(actions.baggageWeightDec()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaggageWeight);