import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Timer, { getTimeFromSeconds } from '../';
import { timeFixtures } from './fixtures';

describe('<Timer />', () => {
  describe('.incrementTime', () => {
    it('increments state.seconds by 1', () => {
      const wrapper = shallow(<Timer title="Tick" />);
      wrapper.instance().incrementTime();
      expect(wrapper.instance().state.seconds).toEqual(1);
    });
  });

  describe('.runTimer', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Timer />);
      wrapper.instance().runTimer();
    });

    it('sets state.on to true', () => {
      expect(wrapper.instance().state.on).toEqual(true);
    });

    it('creates a Interval', () => {
      expect(wrapper.instance().timerId).toBeTruthy();
    });
  });

  describe('.stopTimer', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Timer />);
      wrapper.instance().state.on = true;
      wrapper.instance().timerId = 123;
      wrapper.instance().stopTimer();
    });

    it('sets state.on to false', () => {
      expect(wrapper.instance().state.on).toEqual(false);
    });

    it('clears the Interval', () => {
      expect(wrapper.instance().timerId).toEqual(undefined);
    });
  });

  describe('clicking the delete icon', () => {
    it('calls props.onDelete', () => {
      const mockOnDelete = jest.fn();
      const wrapper = shallow(<Timer onDelete={mockOnDelete} />);
      wrapper.find('.Timer-deleteIcon').simulate('click');
      expect(mockOnDelete.mock.calls).toHaveLength(1);
    });
  });
});

/*
 * Helper Function
*/
describe('getTimeFromSeconds', () => {
  timeFixtures.forEach(([seconds, result]) => {
    expect(getTimeFromSeconds(seconds)).toEqual(result);
  });
});
