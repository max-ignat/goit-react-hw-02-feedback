import { Component } from 'react';
import { Box } from './Box';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  makeOptions = () => {
    let options = Object.keys(this.state);
    return options;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Box as="main" py={3} width="100%">
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.makeOptions()}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          {this.countTotalFeedback() ? (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          ) : (
            <Notification text="There is no feedback" />
          )}
        </Container>
      </Box>
    );
  }
}
