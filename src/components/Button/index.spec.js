import React from 'react';
import {shallow, mount} from 'enzyme';
import Button from '.';

describe('render button', () => {
  test('render button without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });

  describe('render button type variant', () => {
    test('render default button', () => {
      const wrapper = shallow(<Button>default</Button>);
      expect(wrapper.find('.compex-btn')).toBeDefined();
    });
    test('render primary button', () => {
      const wrapper = shallow(<Button type="primary">primary</Button>);
      expect(
        wrapper.find('.compex-btn').hasClass('compex-btn-primary')
      ).toEqual(true);
    });
    test('render success button', () => {
      const wrapper = shallow(<Button type="success">success</Button>);
      expect(
        wrapper.find('.compex-btn').hasClass('compex-btn-success')
      ).toEqual(true);
    });
    test('render warning button', () => {
      const wrapper = shallow(<Button type="warning">warning</Button>);
      expect(
        wrapper.find('.compex-btn').hasClass('compex-btn-warning')
      ).toEqual(true);
    });
    test('render danger button', () => {
      const wrapper = shallow(<Button type="danger">danger</Button>);
      expect(wrapper.find('.compex-btn').hasClass('compex-btn-danger')).toEqual(
        true
      );
    });
  });

  describe('render button size variant', () => {
    test('render large button', () => {
      const wrapper = shallow(<Button size="large">large button</Button>);
      expect(wrapper.find('.compex-btn').hasClass('compex-btn-lg')).toEqual(
        true
      );
    });
    test('render small button', () => {
      const wrapper = shallow(<Button size="small">small button</Button>);
      expect(wrapper.find('.compex-btn').hasClass('compex-btn-sm')).toEqual(
        true
      );
    });
    test('render block button', () => {
      const wrapper = shallow(<Button block>block</Button>);
      expect(wrapper.find('.compex-btn').hasClass('compex-btn-block')).toEqual(
        true
      );
    });
  });

  describe('render button with icon', () => {
    test('button with icon in the left', () => {
      const wrapper = shallow(
        <Button icon="A" iconPosition="left">
          left icon
        </Button>
      );
      expect(wrapper.find('.compex-btn-icon-left').exists()).toEqual(true);
    });
    test('button with icon in the reight', () => {
      const wrapper = shallow(
        <Button icon="A" iconPosition="right">
          right icon
        </Button>
      );
      expect(wrapper.find('.compex-btn-icon-right').exists()).toEqual(true);
    });
  });

  describe('events button', () => {
    test('onclick', () => {
      const mockClick = jest.fn();
      const wrapper = shallow(<Button onClick={mockClick}>onclick</Button>);
      wrapper.find('.compex-btn').simulate('click');
      expect(mockClick).toHaveBeenCalled();
    });
  });

  describe('button with props', () => {
    test('disabled button', () => {
      const wrapper = shallow(<Button disabled>disabled</Button>);
      expect(wrapper.prop('disabled')).toEqual(true);
    });
  });

  describe('button have child', () => {
    test('test pass child as props', () => {
      const wrapper = mount(<Button>child</Button>);
      expect(wrapper.props('children')).toEqual({children: 'child'});
      wrapper.unmount();
    });
  });
});
