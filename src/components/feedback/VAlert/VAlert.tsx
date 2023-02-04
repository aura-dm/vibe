import { ReactNode } from "react";

import VErrorIcon from "../../dataDisplay/icons/VErrorIcon";
import VInfoIcon from "../../dataDisplay/icons/VInfoIcon";
import VSuccessIcon from "../../dataDisplay/icons/VSuccessIcon";
import VWarningIcon from "../../dataDisplay/icons/VWarningIcon";
import { Base, Icon } from "./VAlert.styles";

interface Props {
  children: ReactNode;
  type?: "error" | "info" | "success" | "warning";
}

/**
 * An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
 */
const VAlert = ({ children, type }: Props) => {
  return (
    <Base className={type}>
      <Icon>
        {type === "error" && <VErrorIcon height="20px" width="20px" />}
        {type === "info" && <VInfoIcon height="20px" width="20px" />}
        {type === "success" && <VSuccessIcon height="20px" width="20px" />}
        {type === "warning" && <VWarningIcon height="20px" width="20px" />}
      </Icon>
      {children}
    </Base>
  );
};

export default VAlert;
