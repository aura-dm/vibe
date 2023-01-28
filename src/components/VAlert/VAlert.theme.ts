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
      color: ${({ theme }) => theme.colors.textError.c500};
      fill: ${({ theme }) => theme.colors.textError.c500};
    }

    &.info {
      border: 1px solid ${({ theme }) => theme.colors.primary.c200};
      color: ${({ theme }) => theme.colors.primary.c600};
      fill: ${({ theme }) => theme.colors.primary.c400};
    }

    &.success {
      border: 1px solid ${({ theme }) => theme.colors.success.c100};
      color: ${({ theme }) => theme.colors.textSuccess.c500};
      fill: ${({ theme }) => theme.colors.textSuccess.c400};
    }

    &.warning {
      border: 1px solid ${({ theme }) => theme.colors.warning.c100};
      color: ${({ theme }) => theme.colors.textWarning.c500};
      fill: ${({ theme }) => theme.colors.textWarning.c400};
    }
  `,
  icon: css`
    align-items: center;
    display: flex;
    flex-shrink: 0;
  `,
};

export default alertTheme;
