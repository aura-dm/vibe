import { css } from "styled-components";

import colors from "../../themes/default/tokens/colors";
import shadows from "../../themes/default/tokens/shadows";
import spacing from "../../themes/default/tokens/spacing";

const buttonTheme = {
  base: css`
    background-color: ${colors.transparent};
    border: 1px solid ${colors.surface.c300};
    border-radius: ${spacing(1)};
    color: ${colors.text.c400};
    cursor: pointer;
    padding: ${spacing(1)} ${spacing(4)};

    &:hover {
      background-color: ${colors.surface.c100};
    }

    &:focus-visible {
      ${shadows.input.focus}
      outline: none;
    }

    &.is_primary {
      background-color: ${colors.primary.c500};
      border: 1px solid ${colors.primary.c500};
      color: ${colors.textAlt.c500};

      &:hover {
        background-color: ${colors.primary.c600};
        border: 1px solid ${colors.primary.c600};
      }

      &:focus {
        box-shadow: 0 0 0 2px ${colors.primary.c100};
        outline: none;
      }
    }
  `,
};

export default buttonTheme;
