import React, {Component} from 'react';
import Notification from './Notification';
import Stat from './Stat';
import { Button, StatWraper, StatSection, Title } from 'App.styled';
 
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
    
  };

  // ====================зміна state===================
  clickBtn = (name) => {
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
      <StatWraper>
        <Title>Plese leave your feedback</Title>
        <StatSection>
          <Button type="button" onClick={() => this.clickBtn('good')}>
            Good
          </Button>
          <Button type="button" onClick={() => this.clickBtn('neutral')}>
            Neutral
          </Button>
          <Button type="button" onClick={() => this.clickBtn('bad')}>
            Bad
          </Button>
          <Button onClick={this.reset}> reset </Button>
        </StatSection>
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
      </StatWraper>
    );
  }
}

export default App;
