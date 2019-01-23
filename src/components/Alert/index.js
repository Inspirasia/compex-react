// @flow
import React, {Component} from 'react';
import type {AlertType} from './Alert.type';

import './index.scss';

class Alert extends Component {
  render() {
    const {type, title, onClose, children} = this.props;
    let classNames = 'compex-alert';

    switch (type) {
      case 'primary':
        classNames = `${classNames} compex-alert-primary`;
        break;
      case 'success':
        classNames = `${classNames} compex-alert-success`;
        break;
      case 'warning':
        classNames = `${classNames} compex-alert-warning`;
        break;
      case 'danger':
        classNames = `${classNames} compex-alert-danger`;
        break;
      default:
        break;
    }

    return (
      <div className={classNames}>
        <span>
          <div className="compex-alert-title">{title}</div>
          <div className="compex-alert-body">{children}</div>
        </span>
      </div>
    );
  }
}

export default Alert;
