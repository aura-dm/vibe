import { css } from "styled-components";

import colors from "../../themes/default/tokens/colors";
import fontFamily from "../../themes/default/tokens/fontFamily";
import fontSize from "../../themes/default/tokens/fontSize";
import spacing from "../../themes/default/tokens/spacing";

const textFieldTheme = {
  base: css`
    display: flex;
    flex-direction: column;
  `,
  input: css`
    background-color: ${colors.transparent};
    border: 1px solid ${colors.surface.c300};
    border-radius: ${spacing(1)};
    color: ${colors.text.c500};
    padding: ${spacing(1)} ${spacing(2)};

    &::placeholder {
      color: ${colors.text.c200};
    }

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
  `,
};

export default textFieldTheme;
