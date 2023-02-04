import styled from "styled-components";

import VTypography from "../../dataDisplay/VTypography";

export const Base = styled(VTypography).attrs({
  component: "button",
  variant: "h5",
})`
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    pointer-events: none;
  }

  ${({ theme }) => theme.components.button.base};
`;
