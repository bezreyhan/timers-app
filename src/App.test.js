import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  describe('.createTimer', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
      wrapper.instance().createTimer('First');
    });

    it('adds a timer to the state', () => {
      expect(wrapper.instance().state.timers).toHaveLength(1);
    });

    it('renders the new timer', () => {
      expect(wrapper.find('.App-timersContainer')).toHaveLength(1);
    });
  });

  describe('.deleteTimer', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
      wrapper.instance().state.timers = ['First', 'Second'];
      wrapper.instance().deleteTimer(0);
    });

    it('deletes a timer from the state', () => {
      const { timers } = wrapper.instance().state;

      expect(timers).toHaveLength(1);
      expect(timers[0]).toEqual('Second');
    });

    it('renders without the deleted timer', () => {
      expect(wrapper.find('.App-timersContainer')).toHaveLength(1);
    });
  });
});
