import { css } from "styled-components";

const buttonTheme = {
  base: css`
    background-color: ${({ theme }) => theme.colors.transparent};
    border: 1px solid ${({ theme }) => theme.colors.transparent};
    border-radius: ${({ theme }) => theme.spacing[1]};
    color: ${({ theme }) => theme.colors.text.c400};
    cursor: pointer;
    padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[4]}`};

    &:hover {
      background-color: ${({ theme }) => theme.colors.surface.c100};
    }

    &:focus-visible {
      ${({ theme }) => theme.shadows.input.focus}
      outline: none;
    }

    &.contained,
    &.outlined {
      border: 1px solid ${({ theme }) => theme.colors.surface.c300};
    }

    &.is_primary.contained {
      background-color: ${({ theme }) => theme.colors.primary.c500};
      border: 1px solid ${({ theme }) => theme.colors.primary.c500};
      color: ${({ theme }) => theme.colors.textAlt.c500};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.c600};
        border: 1px solid ${({ theme }) => theme.colors.primary.c600};
      }

      &:focus {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.c100};
        outline: none;
      }
    }

    &.is_primary.text {
      color: ${({ theme }) => theme.colors.primary.c500};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.c100};
        color: ${({ theme }) => theme.colors.primary.c600};
      }

      &:focus {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.c100};
        outline: none;
      }
    }

    &.is_primary.outlined {
      border: 1px solid ${({ theme }) => theme.colors.primary.c500};
      color: ${({ theme }) => theme.colors.primary.c500};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.c100};
        border: 1px solid ${({ theme }) => theme.colors.primary.c600};
        color: ${({ theme }) => theme.colors.primary.c600};
      }

      &:focus {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.c100};
        outline: none;
      }
    }
  `,
};

export default buttonTheme;
