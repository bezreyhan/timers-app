import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';
import DeleteIcon from '../../assets/icons/delete.png';
import Button from '../Button';

function addZero(number) {
  return `0${number}`.slice(-2);
}

export function getTimeFromSeconds(seconds) {
  const s = seconds % 60;
  const minutes = Math.floor(seconds / 60);
  const m = minutes % 60;
  const h = Math.floor(minutes / 60);
  return `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
}

export default class Timer extends Component {
  timerId = null;

  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      on: false
    };
    this.runTimer = this.runTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.incrementTime = this.incrementTime.bind(this);
  }

  runTimer() {
    this.setState({ on: true });
    this.timerId = window.setInterval(this.incrementTime, 1000);
  }

  stopTimer() {
    this.setState({ on: false });
    this.timerId = window.clearInterval(this.timerId);
  }

  incrementTime() {
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
          <div className="Timer-title">{this.props.title}</div>
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
          <Button red onClick={this.stopTimer}>
            Stop
          </Button>
        ) : (
          <Button green onClick={this.runTimer}>
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
