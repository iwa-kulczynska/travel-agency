import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({limits, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input type='number' className={styles.inputSmall} value={currentValue || 0} min={limits.min} max={limits.max} 
      onChange={event => setOptionValue(event.currentTarget.value)} />
  </div>
);

OrderOptionNumber.propTypes = {
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  limits: PropTypes.object,
  currentValue: PropTypes.string,
};

export default OrderOptionNumber;