// @flow
import React, {Component} from 'react';
import type {BadgeType} from './Badge.type';

import './index.scss';

type Props = BadgeType;

class Badge extends Component<Props> {
  render() {
    const {type, hoverable, children} = this.props;
    let classNames = 'compex-badge compex-badge-pill';

    if (hoverable) {
      classNames = `${classNames} compex-badge-hoverable`;
    }

    switch (type) {
      case 'primary':
        classNames = `${classNames} compex-badge-primary`;
        break;
      case 'success':
        classNames = `${classNames} compex-badge-success`;
        break;
      case 'warning':
        classNames = `${classNames} compex-badge-warning`;
        break;
      case 'danger':
        classNames = `${classNames} compex-badge-danger`;
        break;
      default:
        break;
    }
    return <div className={classNames}>{children}</div>;
  }
}

export default Badge;
