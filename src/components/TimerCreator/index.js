import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TimerCreator.css';
import Button from '../Button';
import Input from '../Input';

export default class TimerCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      opened: false,
      error: undefined
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.createTimer = this.createTimer.bind(this);
  }

  showForm() {
    this.setState({ opened: true });
  }

  hideForm() {
    this.setState({ opened: false });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  createTimer(e) {
    e.preventDefault();
    const { title } = this.state;

    if (title.length === 0) {
      return this.setState({ error: 'Title Required' });
    }
    this.props.onCreate(title);
    this.setState({ title: '', error: undefined });
  }

  render() {
    return (
      <div className="TimerCreator">
        {this.state.opened ? (
          <form className="TimerCreator-form" onSubmit={this.createTimer}>
            <Input
              className="TimerCreator-formInput"
              type="text"
              error={this.state.error}
              value={this.state.title}
              onChange={this.handleTitleChange}
              label="Title"
            />
            <div className="TimerCreator-formBtns">
              <Button
                className="TimerCreator-formBtn"
                blue
                onClick={this.createTimer}
              >
                Create
              </Button>
              <Button
                className="TimerCreator-formBtn"
                red
                onClick={this.hideForm}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div className="TimerCreator-openBtn" onClick={this.showForm}>
            +
          </div>
        )}
      </div>
    );
  }
}

TimerCreator.propTypes = {
  onCreate: PropTypes.func
};
