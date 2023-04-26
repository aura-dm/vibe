import { css } from "styled-components";

const iconButtonTheme = {
  base: css`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.transparent};
    border-radius: 100%;
    color: ${({ theme }) => theme.colors.neutral.c800};
    cursor: pointer;
    display: flex;
    fill: ${({ theme }) => theme.colors.neutral.c800};
    height: ${({ theme }) => theme.spacing[9]};
    justify-content: center;
    width: ${({ theme }) => theme.spacing[9]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral.c100};
      fill: ${({ theme }) => theme.colors.neutral.c900};
    }

    &:focus-visible {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.neutral.c200};
      outline: none;
    }
  `,
};

export default iconButtonTheme;
