import React from 'react';
import s from './Spinner.module.scss';

const Spinner = () => (
  <div className={s.spinner}>
    <div className={s.preloader} />
    <div className={s.loader} />
  </div>
);

export default Spinner;
