import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const isOrderNowActive = ({name, contact}) => {
  return (name == null || contact == null);
};

const sendOrder = (options, tripCost, id, name) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    id,
    name,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, options, setOrderOption, id, name}) => (
  <Row>
    {pricing.map((option) => {
      return (
        <Col key={option.id} md={4}>
          <OrderOption setOrderOption={setOrderOption} currentValue={options[option.id]} {...option} />
        </Col>
      );
    })}
    <Col xs={12}>
      <Button disabled={isOrderNowActive(options)} onClick={() => sendOrder(options, tripCost, id, name)}>Order now!</Button>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  currentValue: PropTypes.string,
  setOrderOption: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default OrderForm;