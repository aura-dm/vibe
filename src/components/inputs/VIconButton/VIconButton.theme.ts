import { css } from "styled-components";

const iconButtonTheme = {
  base: css`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.transparent};
    border-radius: 100%;
    color: ${({ theme }) => theme.colors.text.c400};
    cursor: pointer;
    display: flex;
    height: ${({ theme }) => theme.spacing[9]};
    justify-content: center;
    width: ${({ theme }) => theme.spacing[9]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.surface.c100};
    }

    &:focus-visible {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.surface.c200};
      outline: none;
    }
  `,
};

export default iconButtonTheme;
