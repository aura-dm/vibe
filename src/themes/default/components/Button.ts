import { css } from "styled-components";

import colors from "../colors";
import fontFamily from "../fontFamily";

const ButtonTheme = {
  base: css`
    background-color: ${colors.transparent};
    border: 1px solid ${colors.surface.c300};
    border-radius: 3px;
    color: ${colors.text.c400};
    cursor: pointer;
    font-family: ${fontFamily.primary};
    padding: 8px 12px;

    &:hover {
      background-color: ${colors.surface.c100};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${colors.surface.c200};
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
        box-shadow: 0 0 0 2px ${colors.primary.c400};
        outline: none;
      }
    }
  `,
};

export default ButtonTheme;
