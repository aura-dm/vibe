import { css } from "styled-components";

import colors from "../../themes/default/tokens/colors";
import spacing from "../../themes/default/tokens/spacing";

const iconButtonTheme = {
  base: css`
    align-items: center;
    background-color: ${colors.transparent};
    border-radius: 100%;
    color: ${colors.text.c400};
    cursor: pointer;
    display: flex;
    height: ${spacing(9)};
    justify-content: center;
    width: ${spacing(9)};

    &:hover {
      background-color: ${colors.surface.c100};
    }

    &:focus-visible {
      box-shadow: 0 0 0 2px ${colors.surface.c200};
      outline: none;
    }
  `,
};

export default iconButtonTheme;
