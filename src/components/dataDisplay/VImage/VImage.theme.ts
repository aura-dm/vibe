import { css } from "styled-components";

const imageTheme = {
  base: css`
    border: 1px solid ${({ theme }) => theme.colors.surface.c100};
  `,
  img: css`
    border: 1px solid ${({ theme }) => theme.colors.surface.c100};
  `,
};

export default imageTheme;
