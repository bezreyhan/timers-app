import React, { Component } from 'react';
import cx from 'classnames';
import './Input.css';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { className, error, label, value, onChange, ...rest } = this.props;
    const labelText = error || label;

    return (
      <div className={cx('Input', className, { 'Input-error': error })}>
        <label className="Input-label">{labelText}</label>
        <input className="Input-input" onChange={onChange} value={value} />
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string
};
