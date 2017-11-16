import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';
import DeleteIcon from '../../assets/icons/delete.png';
import Button from '../Button';

export function getTimeFromSeconds(seconds) {
  const s = seconds % 60;
  const minutes = Math.floor(seconds / 60);
  const m = minutes % 60;
  const h = Math.floor(minutes / 60);
  return `${h}:${m}:${s}`;
}

export default class Timer extends Component {
  timerId = null;

  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      on: false
    };
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStopTimer = this.handleStopTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  handleStartTimer() {
    this.setState({ on: true });
    this.timerId = window.setInterval(this.startTimer, 1000);
  }

  handleStopTimer() {
    this.setState({ on: false });
    window.clearInterval(this.timerId);
  }

  startTimer() {
    let { seconds } = this.state;
    seconds += 1;
    this.setState({ seconds });
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Timer">
        <div className="Timer-card">
          <div className="Timer-name">{this.props.title}</div>
          <div className="Timer-time">
            {getTimeFromSeconds(this.state.seconds)}
          </div>
          <img
            src={DeleteIcon}
            className="Timer-deleteIcon"
            onClick={this.props.onDelete}
          />
        </div>
        {this.state.on ? (
          <Button red onClick={this.handleStopTimer}>
            Stop
          </Button>
        ) : (
          <Button green onClick={this.handleStartTimer}>
            Start
          </Button>
        )}
      </div>
    );
  }
}

Timer.propTypes = {
  title: PropTypes.string,
  onDelete: PropTypes.func
};
