import styled from "styled-components";

export const Base = styled.div`
  ${({ theme }) => {
    console.log(theme);
    return theme.components.typography.base;
  }}
`;
