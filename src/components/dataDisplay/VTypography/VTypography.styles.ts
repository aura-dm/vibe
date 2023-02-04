import styled from "styled-components";

export const Base = styled.div`
  display: block;
  ${({ theme }) => theme.components.typography.base}
`;
