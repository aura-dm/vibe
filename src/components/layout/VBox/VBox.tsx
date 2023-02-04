import { ReactNode } from "react";

import { Base } from "./VBox.styles";

interface Props {
  children?: ReactNode;
  [x: string]: any;
}

/**
 * This is a base component
 */
const VBox = ({ children, ...rest }: Props) => {
  return <Base {...rest}>{children}</Base>;
};

export default VBox;
