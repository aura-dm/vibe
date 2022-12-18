import styled from "styled-components";

export const Base = styled.div`
  ${({ theme }) => theme.components.textField.base};
`;

export const Input = styled.input`
  ${({ theme }) => theme.components.textField.input};
`;

export const Label = styled.label`
  ${({ theme }) => theme.components.textField.label};
`;
