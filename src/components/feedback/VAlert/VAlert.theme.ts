import { css } from "styled-components";

const alertTheme = {
  base: css`
    align-items: center;
    display: flex;
    font-family: ${({ theme }) => theme.fontSize.body};
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};

    &.error {
      border: 1px solid ${({ theme }) => theme.colors.error.c100};
      color: ${({ theme }) => theme.colors.error.c500};
      fill: ${({ theme }) => theme.colors.error.c500};
    }

    &.info {
      border: 1px solid ${({ theme }) => theme.colors.info.c100};
      color: ${({ theme }) => theme.colors.info.c500};
      fill: ${({ theme }) => theme.colors.info.c400};
    }

    &.success {
      border: 1px solid ${({ theme }) => theme.colors.success.c100};
      color: ${({ theme }) => theme.colors.success.c500};
      fill: ${({ theme }) => theme.colors.success.c400};
    }

    &.warning {
      border: 1px solid ${({ theme }) => theme.colors.warning.c200};
      color: ${({ theme }) => theme.colors.warning.c500};
      fill: ${({ theme }) => theme.colors.warning.c500};
    }
  `,
  icon: css`
    align-items: center;
    display: flex;
    flex-shrink: 0;
  `,
};

export default alertTheme;
