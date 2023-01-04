import PropTypes from 'prop-types';

export const NoAnswer = ({ message }) => (
  <>
    <p>{message}</p>
  </>
);

NoAnswer.propTypes = {
  message: PropTypes.string.isRequired,
};
