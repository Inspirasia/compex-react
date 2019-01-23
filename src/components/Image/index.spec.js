import React from 'react';
import {shallow, mount} from 'enzyme';
import Image from '.';

const src = 'http://www.turkishfashion.net/re_images/1375705159_offer_HM5.jpg';
const alt = 'my-image';

describe('test image component', () => {
  test('render without crash', () => {
    const wrapper = shallow(<Image src={src} alt={alt} />);
    expect(wrapper.exists()).toBe(true);
  });
  test('render circle image', () => {
    const wrapper = mount(<Image src={src} alt={alt} type="circle" />);
    expect(wrapper.find('.compex-image').hasClass('compex-image-circle')).toBe(
      true
    );
    wrapper.unmount();
  });
  test('render square image', () => {
    const wrapper = mount(<Image src={src} alt={alt} type="square" />);
    expect(wrapper.find('.compex-image').hasClass('compex-image-square')).toBe(
      true
    );
    wrapper.unmount();
  });
  test('render custom size image', () => {
    const wrapper = mount(<Image src={src} alt={alt} size={[480, 480]} />);
    expect(wrapper.prop('size')).toEqual([480, 480]);
    wrapper.unmount();
  });
});
