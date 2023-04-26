import { ComponentType, ReactNode } from "react";

import { Base } from "./VTypography.styles";

export type TypographyVariants =
  | "body"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "small"
  | "subtitle";

export interface Props {
  children: ReactNode;
  className?: string;
  component?: string | ComponentType<any> | undefined;
  variant?: TypographyVariants;
  [x: string]: any;
}

/**
 * Use typography to present your design and content as clearly and efficiently as possible.
 */
const VTypography = ({
  children,
  className,
  component = "p",
  variant = "body",
  ...rest
}: Props) => {
  return (
    <Base as={component} className={[className, variant].join(" ")} {...rest}>
      {children}
    </Base>
  );
};

export default VTypography;
