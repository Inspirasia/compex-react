import React from 'react';
import {shallow, mount} from 'enzyme';
import Card from '.';

describe('test card component', () => {
  test('render card without crash', () => {
    const wrapper = shallow(<Card>card</Card>);
    expect(wrapper.exists()).toBe(true);
  });
  test('card with title', () => {
    const title = 'my';
    const wrapper = mount(<Card title={title}>card</Card>);
    expect(wrapper.prop('title')).toEqual('my');
    wrapper.unmount();
  });
  test('card with title and extra', () => {
    const title = 'my';
    const extra = (
      <a href="/" id="extra">
        More
      </a>
    );
    const wrapper = mount(<Card title={title} extra={extra} />);
    expect(wrapper.find('.compex-card-head-title')).toBeDefined();
    expect(wrapper.find('.compex-card-head-action')).toBeDefined();
    wrapper.unmount();
  });

  test('render card with small size', () => {
    const size = 'small';
    const wrapper = shallow(<Card size={size} />);
    expect(wrapper.find('.compex-card').hasClass('compex-card-small'));
    wrapper.unmount();
  });

  test('render card with custom style', () => {
    const style = {width: '240px'};
    const wrapper = mount(<Card style={style}>style</Card>);
    expect(wrapper.prop('style')).toEqual(style);
    wrapper.unmount();
  });

  test('render card with image cover', () => {
    const cover = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';
    const wrapper = mount(<Card cover={cover} />);
    expect(wrapper.prop('cover')).toEqual(cover);
    expect(wrapper.find('.compex-card-cover')).toBeDefined();
    wrapper.unmount();
  });

  test('hoverable card', () => {
    const wrapper = mount(<Card hoverable={true} />);
    expect(wrapper.prop('hoverable')).toEqual(true);
    wrapper.unmount();
  });

  test('render card with footer', () => {
    const wrapper = mount(<Card footer={'footer'} />);
    expect(wrapper.find('.compex-card-footer')).toBeDefined();
    wrapper.unmount();
  });
});
