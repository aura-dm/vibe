import { MouseEvent, ReactNode } from "react";

import { Base } from "./VButton.styles";

interface Props {
  children: ReactNode;
  /**
   * Is this the principal call to action on the page?
   */
  isPrimary?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (evt: MouseEvent) => void;
  [x: string]: any;
}

/**
 * Primary UI component for user interaction
 */
const VButton = ({ children, isPrimary, onClick, ...rest }: Props) => {
  return (
    <Base
      className={isPrimary ? "is_primary" : undefined}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Base>
  );
};

export default VButton;
