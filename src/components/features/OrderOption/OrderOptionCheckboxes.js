import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  currentValue = currentValue || [];
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => (
  <div className={styles.checkboxes}> 
    {values.map(value => (
      <label key={value.id}>
        <input type='checkbox' value={value.id} checked={(currentValue && currentValue.includes(value.id)) || false} onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}/>
        <span>{value.name} - {formatPrice(value.price)}</span>
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  currentValue: PropTypes.array,
};
export default OrderOptionCheckboxes;