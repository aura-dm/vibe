import styled from "styled-components";

export const Base = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[6]};
  width: 100%;
`;
