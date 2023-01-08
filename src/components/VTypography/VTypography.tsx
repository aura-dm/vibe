import { ComponentType, ReactNode } from "react";

import { Base } from "./VTypography.styles";

export interface Props {
  children: ReactNode;
  component?: string | ComponentType<any> | undefined;
  variant?: "body" | "h1" | "h2" | "h3" | "h4" | "h5" | "small" | "subtitle";
  [x: string]: any;
}

/**
 * Use typography to present your design and content as clearly and efficiently as possible.
 */
const VTypography = ({
  children,
  component = "p",
  variant = "body",
  ...rest
}: Props) => {
  return (
    <Base as={component} className={variant} {...rest}>
      {children}
    </Base>
  );
};

export default VTypography;
