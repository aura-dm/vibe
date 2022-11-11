import { ReactNode } from 'react';
import { Wrapper } from './VButton.styles';

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
  [x: string]: any;
}

/**
 * Primary UI component for user interaction
 */
const VButton = ({ children, isPrimary, onClick, ...rest }: Props) => {
  return (
    <Wrapper
      className={isPrimary ? 'is_primary' : undefined}
      onClick={onClick}
      {...rest}>
      {children}
    </Wrapper>
  );
};

export default VButton;
