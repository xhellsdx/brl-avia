import React from 'react';
import './spinner.css';

const Spinner = () => {
  return (
    <div className='spinner'>
      <div id="preloader"></div>
      <div id="loader"></div>
    </div>
  );
}

export default Spinner;