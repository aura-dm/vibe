import { css } from "styled-components";

import colors from "../../themes/default/colors";

const ToolbarTheme = {
  base: css`
    align-items: center;
    border-bottom: 1px solid ${colors.surface.c200};
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
  `,
};

export default ToolbarTheme;
