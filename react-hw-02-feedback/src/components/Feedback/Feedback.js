import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FeedbackControls from './FeedbackControls';
import styles from './Feedback.module.css';

export default class Feedback extends Component {

    // static propTypes

        state = {
            good: 0,
            neutral: 0,
            bad: 0
        }

        handleIncrementGood = event => {
            this.setState((prevState, props) => {
                console.log('prevState', prevState.good);
                return {
                    good: this.state.good + 1
                }
            })
        }
        handleIncrementNeutral = event => {
            this.setState(prevState => {
                console.log('prevState', prevState.neutral);
                return {
                    neutral: this.state.neutral + 1
                }
            })
        }
        handleIncrementBad = event => {
            this.setState((prevState, props) => {
                console.log('prevState', prevState.bad);
                return {
                    bad: this.state.bad + 1
                }
            })
        }
      
        countPositiveFeedbackPercentage = total => {
          return Math.round((this.state.good / total) * 100);
        };
        countTotalFeedback = () => {
            return Object.values(this.state).reduce(function(a, b) {
                return a + b;
            });
        }

      render() {
          let total = this.countTotalFeedback();
          let positivePercentage = this.countPositiveFeedbackPercentage(total);
          let { good, neutral, bad } = this.state;
          return (
              <>

                <h1>Please leave feedback</h1>

                <FeedbackControls 
                    onHandleGood={this.handleIncrementGood}
                    onHandleNeutral={this.handleIncrementNeutral}
                    onHandleBad={this.handleIncrementBad}
                />
                <h3>Statistic</h3>
                {total > 0 ? (
                    
                    <ul>
                        <li>Good: {good}</li>
                        <li>Neutral: {neutral}</li>
                        <li>Bad: {bad}</li>
                        <li>Total: {total}</li>
                        <li>Positive feedback: {positivePercentage} %</li>
                    </ul>
                ) : <span>no feedback given</span>}
              </>
          )
      }
}