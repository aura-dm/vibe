import styled from "styled-components";

import VTypography from "../VTypography";

export const Base = styled(VTypography).attrs({
  component: "button",
  variant: "body",
})`
  ${({ theme }) => theme.components.button.base};
`;
