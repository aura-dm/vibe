import styled from "styled-components";

import VTypography from "../../dataDisplay/VTypography";

export const Base = styled.div`
  ${({ theme }) => theme.components.textField.base};
`;

export const Input = styled(VTypography).attrs({
  component: "input",
  variant: "body",
})`
  ${({ theme }) => theme.components.textField.input};
`;

export const Label = styled(VTypography).attrs({
  component: "label",
  variant: "body",
})`
  ${({ theme }) => theme.components.textField.label};
`;
