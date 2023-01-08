import { css } from "styled-components";

import colors from "../../themes/default/tokens/colors";
import spacing from "../../themes/default/tokens/spacing";

const alertTheme = {
  base: css`
    align-items: center;
    display: flex;
    gap: ${spacing(3)};
    line-height: 1.2rem;
    padding: ${spacing(3)} ${spacing(4)};

    &.error {
      border: 1px solid ${colors.error.c100};
      color: ${colors.textError.c500};
    }

    &.info {
      border: 1px solid #dbb4cd;
      color: #af187a;
    }

    &.success {
      border: 1px solid ${colors.success.c100};
      color: ${colors.textSuccess.c500};
    }

    &.warning {
      border: 1px solid ${colors.warning.c100};
      color: ${colors.textWarning.c500};
    }
  `,
  icon: css`
    align-items: center;
    display: flex;
    flex-shrink: 0;
  `,
};

export default alertTheme;
