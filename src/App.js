// https://www.evernote.com/l/AFUTV7ODb5dAK70DTQ9ticaie6GJaihHlpA

import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';
import TimerCreator from './components/TimerCreator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timers: []
    };
    this.createTimer = this.createTimer.bind(this);
    this.deleteTimer = this.deleteTimer.bind(this);
  }

  createTimer(title) {
    let { timers } = this.state;
    timers.push(title);
    this.setState({ timers });
  }

  deleteTimer(index) {
    let { timers } = this.state;
    timers.splice(index, 1);
    this.setState({ timers });
  }

  render() {
    const { timers } = this.state;

    return (
      <div className="App">
        <h1 className="App-header">Timers</h1>
        <div className="App-timersContainer">
          {timers.length > 0 ? (
            this.state.timers.map((title, i) => (
              <Timer
                key={i}
                title={title}
                onDelete={() => this.deleteTimer(i)}
              />
            ))
          ) : (
            <h3>Create a Timer</h3>
          )}
        </div>
        <TimerCreator onCreate={this.createTimer} />
      </div>
    );
  }
}

export default App;
