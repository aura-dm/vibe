import styled from "styled-components";

import VTypography, { Props } from "../VTypography";

export const Base = styled(VTypography).attrs({
  component: "p",
  variant: "body",
})<Props>`
  ${({ theme }) => theme.components.alert.base};
`;

export const Icon = styled.div`
  ${({ theme }) => theme.components.alert.icon};
`;
