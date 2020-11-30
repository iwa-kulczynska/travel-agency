import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Row>
    {pricing.map((option) => {
      return (
        <Col key={option.id} md={4}>
          <OrderOption setOrderOption={setOrderOption} currentValue={options[option.id]} {...option} />
        </Col>
      );
    })}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  currentValue: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;