import { css } from "styled-components";

import colors from "../colors";
import fontFamily from "../fontFamily";
import fontSize from "../fontSize";

const TextFieldTheme = {
  base: css`
    display: flex;
    flex-direction: column;
  `,
  input: css`
    background-color: ${colors.transparent};
    border: 1px solid ${colors.surface.c300};
    border-radius: 3px;
    color: ${colors.text.c500};
    font-family: ${fontFamily.primary};
    font-size: ${fontSize.body[0]};
    line-height: ${fontSize.body[1]};
    padding: 4px 8px;

    &:hover {
      border: 1px solid ${colors.surface.c300};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${colors.surface.c200};
      outline: none;
    }
  `,
  label: css`
    color: ${colors.text.c500};
    font-family: ${fontFamily.primary};
    margin: 0 0 4px;
  `,
};

export default TextFieldTheme;
