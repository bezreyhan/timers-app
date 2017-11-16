import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.css';

export default class Button extends Component {
  render() {
    const { red, green, blue, className, children, ...rest } = this.props;

    return (
      <div
        className={cx('Button', className, {
          'Button-red': red,
          'Button-green': green,
          'Button-blue': blue
        })}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

Button.propTypes = {
  red: PropTypes.bool,
  green: PropTypes.bool,
  blue: PropTypes.bool,
  className: PropTypes.string
};
