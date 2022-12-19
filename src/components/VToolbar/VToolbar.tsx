import { ReactNode } from "react";

import { Base } from "./VToolbar.styles";

interface Props {
  children: ReactNode;
  [x: string]: any;
}

/**
 * Element for laying out controls
 */
const VToolbar = ({ children, ...rest }: Props) => {
  return <Base {...rest}>{children}</Base>;
};

export default VToolbar;
