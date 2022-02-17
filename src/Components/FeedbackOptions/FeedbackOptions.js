import React from 'react';
import { PropTypes } from 'prop-types';
import FeedbackOptionsStyled from './FeedbackOptionsStyled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      <ul onClick={onLeaveFeedback}>
        {options.map(option => (
          <li key={option}>
            <button type="button" name={option}>
              {option.toLowerCase()}
            </button>
          </li>
        ))}
      </ul>
    </FeedbackOptionsStyled>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
