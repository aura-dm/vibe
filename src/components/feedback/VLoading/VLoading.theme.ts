import { css, keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loadingTheme = {
  base: css`
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.primary.c500} transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation} 0.8s linear infinite;
  `,
};

export default loadingTheme;
