// @flow
import React, {Component} from 'react';
import type {ImageType} from './Image.type';

import './index.scss';

type Props = ImageType;

class Image extends Component<Props> {
  render() {
    const {src, alt, type, size} = this.props;
    let classNames = 'compex-image';
    switch (type) {
      case 'circle':
        classNames = `${classNames} compex-image-circle`;
        break;
      case 'square':
        classNames = `${classNames} compex-image-square`;
        break;
      default:
        break;
    }
    const customSize = size ? {width: size[0], height: size[1]} : null;

    return (
      <div className={classNames} style={customSize}>
        <img src={src} alt={alt} />
      </div>
    );
  }
}

export default Image;
