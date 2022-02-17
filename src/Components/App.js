import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback() || 1;
    return Math.round((good / total) * 100);
  };

  onLeaveFeedback = e => {
    if (e.target.nodeName !== 'BUTTON') return;
    const name = e.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              {...this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
