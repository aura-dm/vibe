import { Dialog } from "@headlessui/react";
import { ReactNode } from "react";

import VTypography from "../../../../dataDisplay/VTypography";

interface Props {
  children: ReactNode;
}

const VModalTitle = ({ children }: Props) => {
  return (
    <Dialog.Title>
      <VTypography component="span" style={{ margin: 0 }} variant="h4">
        {children}
      </VTypography>
    </Dialog.Title>
  );
};

export default VModalTitle;
