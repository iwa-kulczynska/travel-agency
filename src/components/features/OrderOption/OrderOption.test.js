import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type={'type'} name={'name'}  id={'test'} setOrderOption={()=>{}}/>);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct props - name', () => {
    const expectedName = 'testName';
    
    const component = shallow(<OrderOption type={'text'} name={'testName'} />);
    expect(component.find('h3').text()).toEqual(expectedName);
  });

  
});