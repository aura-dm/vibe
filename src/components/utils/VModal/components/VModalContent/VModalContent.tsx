import { ReactNode } from "react";

import { Base } from "./VModalContent.styles";

export interface Props {
  children: ReactNode;
}

const VModalContent = ({ children }: Props) => {
  return <Base>{children}</Base>;
};

export default VModalContent;
