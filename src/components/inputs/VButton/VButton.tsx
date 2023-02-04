import { MouseEvent, ReactNode } from "react";

import { Base } from "./VButton.styles";

interface Props {
  children: ReactNode;
  /**
   * Optional disable button
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (evt: MouseEvent) => void;
  /**
   * Style of button
   */
  variant?: "primary" | "secondary" | "tertiary";
  [x: string]: any;
}

/**
 * Primary UI component for user interaction
 */
const VButton = ({
  children,
  disabled = false,
  onClick,
  variant = "secondary",
  ...rest
}: Props) => {
  return (
    <Base className={variant} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </Base>
  );
};

export default VButton;
