import { css } from "styled-components";

const buttonTheme = {
  base: css`
    background-color: ${({ theme }) => theme.colors.transparent};
    border: 1px solid ${({ theme }) => theme.colors.transparent};
    border-radius: ${({ theme }) => theme.spacing[0]};
    color: ${({ theme }) => theme.colors.neutral.c700};
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral.c100};
    }

    &:focus-visible {
      ${({ theme }) => theme.shadows.input.focus}
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.neutral.c900};
    }

    &.primary {
      background-color: ${({ theme }) => theme.colors.primary.c500};
      border: 1px solid ${({ theme }) => theme.colors.primary.c500};
      color: ${({ theme }) => theme.colors.neutral.c50};

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
        color: ${({ theme }) => theme.colors.neutral.c50};
      }
    }

    &.secondary {
      border: 1px solid ${({ theme }) => theme.colors.neutral.c200};
      color: ${({ theme }) => theme.colors.neutral.c700};

      &:hover {
        background-color: ${({ theme }) => theme.colors.neutral.c100};
        color: ${({ theme }) => theme.colors.neutral.c700};
      }

      &:focus-visible {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.neutral.c200};
        outline: none;
      }

      &:disabled {
        border: 1px solid ${({ theme }) => theme.colors.neutral.c300};
        color: ${({ theme }) => theme.colors.neutral.c500};
      }
    }
  `,
};

export default buttonTheme;
