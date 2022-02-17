import { PropTypes } from 'prop-types';
import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedbak: {positivePercentage}</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.numder.isRequired,
  total: PropTypes.numder.isRequired,
  positivePercentage: PropTypes.numder.isRequired,
};

export default Statistics;
