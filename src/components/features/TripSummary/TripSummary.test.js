import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id={'abc'} image={'testSource'} name={'testAlt'} cost={'$100'} days={10} tags={[]} />);
    expect(component).toBeTruthy();
  });

  it('should render id', () => {
    const component = shallow(<TripSummary id={'abc'} image={'testSource'} name={'testAlt'} cost={'$100'} days={10} tags={[]} />);
    const expectedHref = '/trip/abc';
    expect(component.find('Link').prop('to')).toEqual(expectedHref);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary tags={[]}/>)).toThrow();
  });

  it('image should has correct alt and source', () => {
    const expectedAlt = 'testAlt';
    const expectedSource = 'testSource';
    const component = shallow(<TripSummary image={'testSource'} name={'testAlt'} cost={'$100'} days={10} tags={[]} />);
  
    const renderedImage = component.find('img');
    expect(renderedImage.prop('src')).toEqual(expectedSource);
    expect(renderedImage.prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props - name, cost and days', () => {
    const expectedName = 'testName';
    const expectedCost = 'from $100';
    const expectedDays = '10 days';
    const component = shallow(<TripSummary name={'testName'} image={'testSource'} id={'abc'} cost={'$100'} days={10} tags={[]} />);
  
    expect(component.find('h3').text()).toEqual(expectedName);
    expect(component.find('span').first().text()).toEqual(expectedDays);
    expect(component.find('span').at(1).text()).toEqual(expectedCost);
  });
});