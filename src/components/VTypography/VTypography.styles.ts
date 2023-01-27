import styled from "styled-components";

export const Base = styled.div`
  ${({ theme }) => {
    return theme.components.typography.base;
  }}
`;
