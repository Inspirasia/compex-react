import React from 'react';
import {shallow} from 'enzyme';
import Badge from '.';

describe('render badge', () => {
  test('render badge without crashing', () => {
    const wrapper = shallow(<Badge />);
    expect(wrapper.exists()).toBe(true);
  });
  describe('render badge type variant', () => {
    test('render default badge', () => {
      const wrapper = shallow(<Badge>default</Badge>);
      expect(wrapper.find('.compex-badge')).toBeDefined();
    });
    test('render primary badge', () => {
      const wrapper = shallow(<Badge type="primary">primary</Badge>);
      expect(
        wrapper.find('.compex-badge').hasClass('compex-badge-primary')
      ).toEqual(true);
    });
    test('render success badge', () => {
      const wrapper = shallow(<Badge type="success">success</Badge>);
      expect(
        wrapper.find('.compex-badge').hasClass('compex-badge-success')
      ).toEqual(true);
    });
    test('render warning badge', () => {
      const wrapper = shallow(<Badge type="warning">warning</Badge>);
      expect(
        wrapper.find('.compex-badge').hasClass('compex-badge-warning')
      ).toEqual(true);
    });
    test('render danger badge', () => {
      const wrapper = shallow(<Badge type="danger">danger</Badge>);
      expect(
        wrapper.find('.compex-badge').hasClass('compex-badge-danger')
      ).toEqual(true);
    });
    test('render hoverable badge', () => {
      const wrapper = shallow(<Badge hoverable>hover</Badge>);
      expect(
        wrapper.find('.compex-badge').hasClass('compex-badge-hoverable')
      ).toEqual(true);
    });
  });
});
