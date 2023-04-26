import styled from "styled-components";

interface LoadProps {
  readonly size: number;
}

export const Base = styled.span<LoadProps>`
  ${({ theme }) => theme.components.loading.base};
  border-width: ${({ size }) => `${size / 10}px`};
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
`;
