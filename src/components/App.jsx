import React, {Component} from 'react';
import Notification from './Notification';
import Stat from './Stat';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  // ====================зміна state===================
  clickBtn(name) {
    this.setState(prevState => {
      return { visible: true, [name]: prevState[name] + 1 };
    });
  }

  reset = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
      visible: false,
    });
  };

  totalFeeds = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };

  positiveFeedsPercentage = () => {
    const total = this.totalFeeds();
    if (!total) {
      return 0;
    }

    const { good } = this.state;
    return Math.round((good / this.totalFeeds()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <section>
        <h1 className="title">Plese leave your feedback</h1>
        <div className="controls">
          <button type="button" onClick={() => this.clickBtn('good')}>
            Good
          </button>
          <button type="button" onClick={() => this.clickBtn('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => this.clickBtn('bad')}>
            Bad
          </button>
          <button onClick={this.reset}> X </button>
        </div>

        {this.state.visible ? (
          <Stat
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalFeeds()}
            totalPersentage={this.positiveFeedsPercentage()}
          />
        ) : (
          <Notification text="There is no feedback. Please rate!" />
        )}
      </section>
    );
  }
}

export default App;
