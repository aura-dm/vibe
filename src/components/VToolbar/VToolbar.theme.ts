import { css } from "styled-components";

import colors from "../../themes/default/tokens/colors";
import spacing from "../../themes/default/tokens/spacing";

const toolbarTheme = {
  base: css`
    align-items: center;
    border-bottom: 1px solid ${colors.surface.c200};
    display: flex;
    height: ${spacing(12)};
    justify-content: space-between;
    padding: 0 ${spacing(5)};
    width: 100%;
  `,
};

export default toolbarTheme;
