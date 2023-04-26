import { ReactNode } from "react";

interface Props {
  /**
   * SVG child elements (\<circle\>, \<path\>, etc)
   */
  children: ReactNode;
  className?: string;
  height?: string;
  width?: string;
}

/**
 * A wrapper for SVG icons.
 */
const VSvgIcon = ({ children, height = "24px", width = "24px" }: Props) => {
  return (
    <svg
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default VSvgIcon;
