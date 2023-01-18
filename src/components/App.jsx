import React, { Component } from 'react';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  goodClick = () => {
    this.setState({
      good: this.state.good + 1,
      visible : true,
    });
  };
  neutralClick = () => {
    this.setState({
      neutral: this.state.neutral + 1,
      visible : true,
    });
  };
  badClick = () => {
    this.setState({
      bad: this.state.bad + 1,
      visible : true,
    });
  };

  // reset = () => {
  //   this.setState({
  //     good:  0,
  //     neutral:  0,
  //     bad:  0,
  //    })
  //  }

  totalFeeds = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  positiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.totalFeeds()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <section>
        <h1 className="title">Plese leave your feedback</h1>
        <div className="controls">
          <button type="button" onClick={this.goodClick}>
            Good
          </button>
          <button type="button" onClick={this.neutralClick}>
            Neutral
          </button>
          <button type="button" onClick={this.badClick}>
            So-so
          </button>
          {/* <button onClick={this.reset}>reset</button> */}
        </div>

        
          <div>
            <h2>Statistics</h2>
            <p> Good: {good} </p>
            <p> Neutral: {neutral} </p>
            <p> So-so: {bad} </p>
            <p> Total: {this.totalFeeds()} </p>
            <p> Positive feedback: {this.positiveFeedbackPercentage()} </p>
          </div>
        

        {/* <div>
          <h2>Statistics</h2>
          <p> Good: {good} </p>
          <p> Neutral: {neutral} </p>
          <p> So-so: {bad} </p>
          <p> Total: {this.totalFeeds()} </p>
          <p> Positive feedback: {this.positiveFeedbackPercentage()} </p>
        </div> */}
      </section>
    );
  }
}



export default App;
