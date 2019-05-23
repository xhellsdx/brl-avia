import React from 'react';
import { connect } from 'react-redux';

import TicketsFoundList from '../tickets-found-list'
import Basket from '../basket';
import './content-block.css';

const ContentBlock = ({cityToId, cityFromId}) => {
  if (cityToId === null || cityFromId === null) {
    return (
      <main>
        <div className='empty-content-block'>
        	Начните поиск билетов
        </div>
      </main>
    );
  } else {
    return(
      <main>
        <TicketsFoundList/>
        <Basket/>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cityToId: state.filter.cityToId,
    cityFromId: state.filter.cityFromId
  }
}

export default connect(mapStateToProps)(ContentBlock);