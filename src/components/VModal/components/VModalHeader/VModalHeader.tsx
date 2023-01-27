import { ReactNode } from "react";

import { Base } from "./VModalHeader.styles";

interface Props {
  children: ReactNode;
}

const VModalHeader = ({ children }: Props) => {
  return <Base>{children}</Base>;
};

export default VModalHeader;
