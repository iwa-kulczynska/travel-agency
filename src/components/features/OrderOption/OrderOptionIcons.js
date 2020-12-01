import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.component}>
    {required ? '' : (
      <div className={styles.icon} onClick={() => {setOptionValue('');}}>
        <Icon name='times-circle' /><span>none</span>
      </div>
    )}
    {values.map(value => (
      <div className={`${styles.icon} ${currentValue === value.id ? styles.iconActive : ''}`} key={value.id} onClick={() => {setOptionValue(value.id);}}>
        <Icon name={value.icon} /><span>{value.name} - {formatPrice(value.price)}</span>
        {/* <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option> */}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
};
export default OrderOptionIcons;