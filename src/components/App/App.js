import { Component } from 'react'
import { Container } from './App.styled'

import Statistics from '../Statistics/Statistics'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Section from '../Section/Section'
import Notification from '../Notification/Notification'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state
    return (good + neutral + bad)

  }

  countPositiveFeedbackPercentage() {
    const positiveFeedback =
      (100 * this.state.good) / this.countTotalFeedback() || 0

    return Math.round(positiveFeedback)
  }

  onLeaveFeedbackButton = (event) => {
    const target = event.target
    this.setState({
      [target.name]: this.state.[target.name] + 1,
    })
  }

  render() {
    const { good, neutral, bad } = this.state
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedbackButton}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good= {good}
              neutral= {neutral}
              bad= {bad}
              total= {this.countTotalFeedback()}
              positivePercentage= {this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    )
  }
}
