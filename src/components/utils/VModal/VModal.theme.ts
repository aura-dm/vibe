import { css } from "styled-components";

const modalTheme = {
  base: css`
    align-items: center;
    display: flex;
    justify-content: center;
    left: 0;
    height: 100%;
    padding: ${({ theme }) => theme.spacing[6]};
    position: fixed;
    top: 0;
    width: 100%;
  `,
  overlay: css`
    background-color: rgba(255, 255, 255, 0.7);
    height: 100%;
    left: 0;
    min-height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
  `,
  panel: css`
    background-color: ${({ theme }) => theme.colors.neutral.c50};
    ${({ theme }) => theme.shadows.modal.xl}
    height: 100%;
    width: 100%;
  `,
};

export default modalTheme;
