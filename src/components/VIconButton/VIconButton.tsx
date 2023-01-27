import { MouseEvent, ReactNode } from "react";

import { Base } from "./VIconButton.styles";

interface Props {
  children: ReactNode;
  /**
   * Optional click handler
   */
  onClick?: (evt: MouseEvent) => void;
  [x: string]: any;
}

/**
 * UI element for non-intrusive clickable icon
 */
const VIconButton = ({ children, onClick, ...rest }: Props) => {
  return (
    <Base onClick={onClick} {...rest}>
      {children}
    </Base>
  );
};

export default VIconButton;
