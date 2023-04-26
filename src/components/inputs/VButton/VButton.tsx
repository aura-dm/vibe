import { MouseEvent, ReactNode } from "react";

import { Base } from "./VButton.styles";

interface Props {
  children: ReactNode;
  /**
   * Optional disable button
   */
  className?: string;
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
  className,
  disabled = false,
  onClick,
  variant = "secondary",
  ...rest
}: Props) => {
  return (
    <Base
      className={[className, variant].join(" ")}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Base>
  );
};

export default VButton;
