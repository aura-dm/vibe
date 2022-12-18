import { ComponentType, ReactNode } from "react";

import { Wrapper } from "./VTypography.styles";

interface Props {
  children: ReactNode;
  component?: string | ComponentType<any> | undefined;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "body1"
    | "small";
}

/**
 * Use typography to present your design and content as clearly and efficiently as possible.
 */
const VTypography = ({
  children,
  component = "p",
  variant = "body1",
}: Props) => {
  return (
    <Wrapper as={component} className={variant}>
      {children}
    </Wrapper>
  );
};

export default VTypography;
