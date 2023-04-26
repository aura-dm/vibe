import { css } from "styled-components";

const toolbarTheme = {
  base: css`
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.c200};
    display: flex;
    height: ${({ theme }) => theme.spacing[12]};
    justify-content: space-between;
    padding: 0 ${({ theme }) => theme.spacing[5]};
    width: 100%;
  `,
};

export default toolbarTheme;
