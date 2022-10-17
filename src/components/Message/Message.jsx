import PropTypes from 'prop-types';
import { TextMessage } from './Message.styled';

export const Message = ({ text }) => {
  return (
    <div>
      <TextMessage>{text}</TextMessage>
    </div>
  );
};

Message.prototype = {
  text: PropTypes.string.isRequired,
};
