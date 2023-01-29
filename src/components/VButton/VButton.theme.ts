import { css } from "styled-components";

const buttonTheme = {
  base: css`
    background-color: ${({ theme }) => theme.colors.transparent};
    border: 1px solid ${({ theme }) => theme.colors.transparent};
    border-radius: ${({ theme }) => theme.spacing[1]};
    color: ${({ theme }) => theme.colors.text.c500};
    cursor: pointer;
    padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[4]}`};

    &:hover {
      background-color: ${({ theme }) => theme.colors.surface.c100};
    }

    &:focus-visible {
      ${({ theme }) => theme.shadows.input.focus}
      outline: none;
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.text.c100};
      pointer-events: none;
    }

    &.primary {
      background-color: ${({ theme }) => theme.colors.primary.c500};
      border: 1px solid ${({ theme }) => theme.colors.primary.c500};
      color: ${({ theme }) => theme.colors.textAlt.c500};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.c600};
        border: 1px solid ${({ theme }) => theme.colors.primary.c600};
      }

      &:focus-visible {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.c100};
        outline: none;
      }

      &:disabled {
        background-color: ${({ theme }) => theme.colors.primary.c300};
        border: 1px solid ${({ theme }) => theme.colors.primary.c300};
        color: ${({ theme }) => theme.colors.textAlt.c500};
      }
    }

    &.secondary {
      border: 1px solid ${({ theme }) => theme.colors.surface.c500};
      color: ${({ theme }) => theme.colors.text.c400};

      &:hover {
        background-color: ${({ theme }) => theme.colors.surface.c100};
        color: ${({ theme }) => theme.colors.text.c500};
      }

      &:focus-visible {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.surface.c200};
        outline: none;
      }

      &:disabled {
        border: 1px solid ${({ theme }) => theme.colors.surface.c300};
        color: ${({ theme }) => theme.colors.text.c100};
      }
    }
  `,
};

export default buttonTheme;
