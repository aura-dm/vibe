import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  /**
   * Is this the principal call to action on the page?
   */
  isPrimary?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Wrapper = styled.button`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 0.5rem;
  color: #222222;
  padding: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #62b0e8;
  }

  &.is_primary {
    background-color: #186faf;
    border: 1px solid #186faf;
    color: #ffffff;

    &:hover {
      background-color: #0a558c;
      border: 1px solid #0a558c;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #62b0e8;
      background-color: #0a558c;
    }
  }
`;

/**
 * Primary UI component for user interaction
 */
const VButton = ({ children, isPrimary, onClick }: Props) => {
  return (
    <Wrapper className={isPrimary ? 'is_primary' : undefined} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default VButton;
