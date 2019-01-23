import React from 'react';
import {shallow} from 'enzyme';
import Alert from '.';

describe('alert component test', () => {
  test('render without crash', () => {
    const wrapper = shallow(<Alert>Test</Alert>);
    expect(wrapper.exists()).toBe(true);
  });
  describe('render alert variant', () => {
    test('render default alert', () => {
      const wrapper = shallow(<Alert>default</Alert>);
      expect(wrapper.find('.compex-alert')).toBeDefined();
    });
    test('render primary alert', () => {
      const wrapper = shallow(<Alert type="primary">primary</Alert>);
      expect(
        wrapper.find('.compex-alert').hasClass('compex-alert-primary')
      ).toEqual(true);
    });
    test('render success alert', () => {
      const wrapper = shallow(<Alert type="success">success</Alert>);
      expect(
        wrapper.find('.compex-alert').hasClass('compex-alert-success')
      ).toEqual(true);
    });
    test('render warning alert', () => {
      const wrapper = shallow(<Alert type="warning">warning</Alert>);
      expect(
        wrapper.find('.compex-alert').hasClass('compex-alert-warning')
      ).toEqual(true);
    });
    test('render primary danger', () => {
      const wrapper = shallow(<Alert type="danger">danger</Alert>);
      expect(
        wrapper.find('.compex-alert').hasClass('compex-alert-danger')
      ).toEqual(true);
    });
  });
});
