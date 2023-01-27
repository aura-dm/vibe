import { css } from "styled-components";

import colors from "../../themes/default/tokens/colors";
import fontFamily from "../../themes/default/tokens/fontFamily";
import fontSize from "../../themes/default/tokens/fontSize";
import fontWeight from "../../themes/default/tokens/fontWeight";
import shadows from "../../themes/default/tokens/shadows";
import spacing from "../../themes/default/tokens/spacing";

const modalTheme = {
  base: css`
    align-items: center;
    display: flex;
    justify-content: center;
    left: 0;
    height: 100%;
    padding: ${spacing(6)};
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
    background-color: #ffffff;
    ${shadows.modal.xl}
    height: 100%;
    width: 100%;
  `,
};

export default modalTheme;
