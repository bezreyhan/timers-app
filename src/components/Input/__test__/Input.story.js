import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../';

storiesOf('Input', module)
  .add('default', () => <InputWrapper />)
  .add('with value', () => (
    <InputWrapper value="bez@openlistings.com" label="Email" />
  ))
  .add('with error', () => (
    <InputWrapper value="Woops" error="Invalid Email" />
  ));

class InputWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value || '' };
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  render() {
    const props = {
      ...this.props,
      value: this.state.value,
      onChange: this._onChange
    };
    return <Input {...props} />;
  }
}
