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
  /**
   * Style of button
   */
  variant?: "contained" | "outlined" | "text";
  [x: string]: any;
}

/**
 * Primary UI component for user interaction
 */
const VButton = ({
  children,
  isPrimary,
  onClick,
  variant = "contained",
  ...rest
}: Props) => {
  return (
    <Base
      className={[isPrimary ? "is_primary" : undefined, variant].join(" ")}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Base>
  );
};

export default VButton;
