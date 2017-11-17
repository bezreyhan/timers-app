import React from 'react';
import ReactDOM from 'react-dom';
import TimerCreator from '../';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<TimerCreator />', () => {
  describe('.createTimer with a valid title', () => {
    it('calls props.onCreate', () => {
      const mockHandleCreate = jest.fn();
      const wrapper = shallow(<TimerCreator onCreate={mockHandleCreate} />);
      wrapper.instance().state.title = 'testTitle';
      wrapper.instance().createTimer({ preventDefault: () => {} });
      expect(mockHandleCreate.mock.calls).toHaveLength(1);
    });
  });

  describe('.createTimer with an empty title', () => {
    let wrapper;
    const mockHandleCreate = jest.fn();
    beforeEach(() => {
      wrapper = shallow(<TimerCreator onCreate={mockHandleCreate} />);
      wrapper.instance().state.title = '';
      wrapper.instance().createTimer({ preventDefault() {} });
    });

    it('does not call props.onCreate', () => {
      expect(mockHandleCreate.mock.calls).toHaveLength(0);
    });

    it('adds an error to the state', () => {
      expect(wrapper.instance().state.error.length).toBeGreaterThan(0);
    });
  });
});
