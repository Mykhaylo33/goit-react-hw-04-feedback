import { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { positivePercentage, total, good, neutral, bad } = this.props;

    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
